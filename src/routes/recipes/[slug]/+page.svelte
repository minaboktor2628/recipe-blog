<script lang="ts">
	import type { PageData } from './$types';
	import Showdown from 'showdown';
	import katex from 'katex';
	import 'katex/dist/katex.min.css';

	let { data }: { data: PageData } = $props();

	// Preserve LaTeX syntax (don’t escape $...$)
	const converter = new Showdown.Converter({
		extensions: [
			() => [
				{
					type: 'output',
					regex: /\$(.+?)\$/g,
					replace: (match, content) => katex.renderToString(content, { throwOnError: false })
				},
				{
					type: 'output',
					regex: /\$\$(.+?)\$\$/gs,
					replace: (match, content) =>
						katex.renderToString(content, {
							displayMode: true,
							throwOnError: false
						})
				}
			]
		]
	});

	const postContentHTML = converter.makeHtml(data.post.content);
</script>

<article class="prose dark:prose-invert">
	<h1>{data.post.fields.title}</h1>
	<p><i>Posted on: {data.post.fields.date}</i></p>
	{@html postContentHTML}
</article>
