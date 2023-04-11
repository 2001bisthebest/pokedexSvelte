<script lang="ts">
    import '../app.css'
    import { page } from '$app/stores';
    import { caughtMonsters } from '$lib/stores';
</script>

<div class="flex justify-between bg-gray-dark text-white-f p-2.25">
    <a href="/" class:active={$page.url.pathname == '/'} class="no-underline hover:text-[#ccc] {$page.url.pathname == '/' ? "border border-[#ccc] rounded" : ""}">Home</a>
    <a href="/my-monster" class:active={$page.url.pathname == '/my-monster'} class="no-underline hover:text-[#ccc] {$page.url.pathname == '/my-monster' ? "border border-[#ccc] rounded" : ""}">
        My Monster ({$caughtMonsters.length})
    </a>
</div>

<div class="max-w-9/10 w-300 mx-auto my-0">
    <slot />
</div>
