<script lang="ts">
	import type { PageData } from './$types';
	import CornerDownRight from '@lucide/svelte/icons/corner-down-right';
	let { data }: { data: PageData } = $props();
	console.log({ data });
</script>

<main class="prose dark:prose-invert">
	<h1>Recipes Posts</h1>
	<ul>
		{#each data.recipes as post (post.fields.slug)}
			<li>
				<a href={`/recipes/${post.fields.slug}`}>{post.fields.title}</a>
				<span>-</span>
				<p class="inline">{post.fields.date}</p>
				<p class="mt-0 line-clamp-1">
					<CornerDownRight class="m-2 inline size-5" />
					{post.fields.brief}
				</p>
			</li>
		{/each}
	</ul>
</main>
