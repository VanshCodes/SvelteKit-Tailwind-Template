<script>
	import Icon from "$lib/Icon.svelte";
	import { menuItems } from "../../assets/details";
	import showMenuStore, { toggleMenu } from "../../store/showMenu";
	import Hamburger from "./hamburger.svelte";
	import Item from "./item.svelte";
	let showMenu;
	showMenuStore.subscribe((value) => (showMenu = value));
	$: console.log(showMenu);
</script>

<div class="flex bg-gray-200 h-16 w-full shadow-lg justify-between">
	<h1 class="my-auto mx-2 poppin-font">Vansh</h1>
	<div
		class="hidden lg:flex mx-auto space-x-7 bg-white px-5 items-center h-14 shadow-2xl"
	>
		{#each menuItems as item, index (index)}
			<Item {...item} />

			<!-- content here -->
		{/each}
	</div>
	<div on:click={toggleMenu}>
		<Icon class="lg:hidden" icon="menu" />
	</div>
	{#if showMenu}
		<Hamburger class="transition duration-500 ease-in-out" />

		<!-- content here -->
	{/if}
</div>
