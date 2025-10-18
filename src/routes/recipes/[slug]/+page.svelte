<script lang="ts">
	import type { PageData } from './$types';
	import Showdown from 'showdown';
	import katex from 'katex';
	import 'katex/dist/katex.min.css';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import Separator from '$lib/components/ui/separator/separator.svelte';

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

<nav class="fixed top-0 left-0 z-10 w-full bg-background p-2">
	<a href="/recipes" class="h-full" title="back to recipes">
		<ChevronLeft class="size-8" />
	</a>
</nav>

<main>
	<article class="prose pt-8 dark:prose-invert">
		<h1>{data.post.fields.title}</h1>
		<p><i>Posted on: {data.post.fields.date}</i></p>
		{@html postContentHTML}
	</article>
</main>
