<script lang="ts">
    import '../app.css'
    import type { IndexMonster } from "./+page";
    import { caughtMonsters } from "$lib/stores";
    //create prop using monster object from page.ts file
    export let monster: IndexMonster;
    const catchMonster = () => {
        caughtMonsters.update((monsters) => {
            return[...monsters, monster]
        })
    };
   
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="w-25 m-2.25 p-2.25 relative bg-gray-light hover:bg-[#ddd]">
    <div on:click={catchMonster}>
        <div class="flex flex-col items-center">
            <img src={monster.image} alt={monster.name} />
            {monster.name}
        </div>
        <div class="absolute top-2 left-2 text-m text-[#aaa]">
            {monster.id}
        </div>
    </div> 
</div>

