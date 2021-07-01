<script>
    import Icon from "$lib/Icon.svelte";
</script>

<div class="grid mobilenav md:largenav place-items-center">
    <div class="font-bold text-3xl primary-font">Vansh</div>
    <div style="grid-area: nav-items;" class="flex items-center">
        <div class="nav-item">Home</div>
        <div class="nav-item">About</div>
        <div class="nav-item">Get</div>
        <div class="nav-item">Contact</div>
    </div>
    <div style="grid-area: icons;" class="flex icons items-center">
        <Icon icon="facebook" />
    </div>
</div>

<style>
</style>
