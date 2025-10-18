<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import favicon from '$lib/assets/favicon.svg';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import ModeToggle from '$lib/components/mode-toggle.svelte';
	import { Separator } from '$lib/components/ui/separator/index';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-screen flex-col">
	<nav class="flex justify-between bg-background/95 p-4">
		<NavigationMenu.Root>
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Link href="/" class={navigationMenuTriggerStyle()}>
						Home
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link href="/recipes" class={navigationMenuTriggerStyle()}>
						Recipes
					</NavigationMenu.Link>
				</NavigationMenu.Item>
			</NavigationMenu.List>
		</NavigationMenu.Root>
		<ModeToggle />
	</nav>
	<Separator />
	<ModeWatcher />

	<section class="flex-1 overflow-y-auto p-4">
		{@render children()}
	</section>
</div>
