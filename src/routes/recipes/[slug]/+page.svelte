<script lang="ts">
	import type { PageData } from './$types';
	import Showdown from 'showdown';
	let { data }: { data: PageData } = $props();
	const converter = new Showdown.Converter();
	const postContentHTML = converter.makeHtml(data.post.content);
</script>

<article class="prose dark:prose-invert">
	<h1>{data.post.fields.title}</h1>
	<p>{data.post.fields.date}</p>
	{@html postContentHTML}
</article>
