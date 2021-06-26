<script>
    import { fly } from "svelte/transition";

    import { menuItems } from "../../assets/details";
    import { toggleMenu } from "../../store/showMenu";
</script>

<div
    class={"fixed lg:hidden top-0 h-screen left-0 bg-red-900 w-1/2 " +
        $$props.class}
    transition:fly={{ x: 200, duration: 2000 }}
>
    <div class="flex flex-col my-5">
        {#each menuItems as { _, name }}
            <div
                class="text-5xl russo-font hover:border-b-4 transition-all duration-100 ease-out hover:border-blue-400 text-blue-300 hover:text-blue-700 cursor-pointer p-3"
                on:click={toggleMenu}
            >
                {name}
            </div>
            <!-- content here -->
        {/each}
    </div>
</div>
