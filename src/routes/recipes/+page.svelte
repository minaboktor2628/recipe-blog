<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import type { PageData } from './$types';
	import CornerDownRight from '@lucide/svelte/icons/corner-down-right';
	let { data }: { data: PageData } = $props();

	let searchString = $state('');
	let filtered = $derived(
		data.recipes.filter(
			(recipe) =>
				recipe.fields.tags.some((tag) => tag.toLowerCase().includes(searchString)) ||
				recipe.fields.title.toLowerCase().includes(searchString)
		)
	);
</script>

<main class="prose dark:prose-invert">
	<h1>Mina&apos;s Recipes</h1>
	<p>Images coming soon! (when I cook them again, lol)</p>
	<Input placeholder="Search recipes... (e.g. 'vegan', 'dessert')" bind:value={searchString} />
	<ul>
		{#each filtered as post (post.fields.slug)}
			<li>
				<a href={`/recipes/${post.fields.slug}`} dir="ltr">{post.fields.title}</a>
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
