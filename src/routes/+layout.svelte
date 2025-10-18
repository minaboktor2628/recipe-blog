<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
</script>

<svelte:head>
	<link
		rel="icon"
		href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWYtaGF0LWljb24gbHVjaWRlLWNoZWYtaGF0Ij48cGF0aCBkPSJNMTcgMjFhMSAxIDAgMCAwIDEtMXYtNS4zNWMwLS40NTcuMzE2LS44NDQuNzI3LTEuMDQxYTQgNCAwIDAgMC0yLjEzNC03LjU4OSA1IDUgMCAwIDAtOS4xODYgMCA0IDQgMCAwIDAtMi4xMzQgNy41ODhjLjQxMS4xOTguNzI3LjU4NS43MjcgMS4wNDFWMjBhMSAxIDAgMCAwIDEgMVoiLz48cGF0aCBkPSJNNiAxN2gxMiIvPjwvc3ZnPg=="
	/>
	<title>Mina&apos;s Recipes</title>
</svelte:head>

<ModeWatcher />
<section class="flex-1 overflow-y-auto p-4">
	{@render children()}
</section>
<p class="prose p-2 dark:prose-invert">
	made with <span class="text-red-500">{'<3'}</span> by Mina Boktor
</p>
