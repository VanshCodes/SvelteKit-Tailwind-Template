<script>
    export let icon, name;
</script>

<div {...$$props} class={"flex text-lg noto-sans-font font-bold hover:border-b-4 hover:border-blue-700 cursor-pointer "+ $$props.class}>
{name}
</div>

<!-- <div class={"group flex flex-col cursor-pointer "+ $$props.class} >
    <span
    {...$$props}
        class=" material-icons-outlined !text-4xl !text-blue-600 group-hover:animate-bounce"
    >
        {icon}
    </span>
    <div class="text-sm">{name || ""}</div>
</div> -->
