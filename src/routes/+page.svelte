<script lang="ts">
    import '../app.css'
    import type { PageData } from "./$types";
    import { page } from "$app/stores";
    import type { IndexMonster } from "./+page";
    import { generations } from "./generations";
    import { goto } from "$app/navigation";
    import Monster from "./Monster.svelte";


    export let data: PageData;
    
    let form = {
        seachString: ''
    }
    let seachString = '' 
    $: selectedMonsters = data.monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(seachString.toLowerCase());
    })

    

    $: selectedGenerationId = $page.url.searchParams.get('generation_id') || '';

    const updateSearchParams = (key: string, value: string) => {
        const searchParams = new URLSearchParams($page.url.searchParams);
        searchParams.set(key, value);
        goto(`?${searchParams.toString()}`);
    };

    const submitSeach = (e: Event) => {
        seachString = form.seachString
    }
    
</script>

<div class="flex flex-row flex-wrap justify-center">
    
    <button
        on:click={() => updateSearchParams('generation_id', 'all')}
        class:active={selectedGenerationId == 'all'}
        class="m-1.25 py-1.25 px-2.25 border border-black {selectedGenerationId == 'all' ? "bg-gray-dark text-white-f hover:bg-gray" : "bg-[#f9f9f9] text-gray-dark active:bg-gray-dark active:text-white-f hover:bg-gray-light"}"   
    >
    All
    </button>
    {#each generations as generation (generation.id)}
        <button  
        class:active={selectedGenerationId === generation.id.toString()}
        on:click={() => updateSearchParams('generation_id', generation.id.toString())}
        class="m-1.25 py-1.25 px-2.25 border border-black {selectedGenerationId === generation.id.toString() ? "bg-gray-dark text-white-f hover:bg-gray" : "bg-[#f9f9f9] text-gray-dark active:bg-gray-dark active:text-white-f hover:bg-gray-light"}"
        >
            {generation.main_region}
        </button>
    {/each}
</div>
<form class="flex justify-center mx-0 my-5" on:submit|preventDefault={submitSeach}>
    <input class="px-2.25 py-1.25 border border-gray-dark rounded-1.25 w-50" type="text" bind:value={form.seachString} placeholder="Pokemon Name" />
    <input class="px-2.25 py-1.25 border border-gray-dark rounded-1.25 bg-gray-dark text-white-f ml-1.25" type="submit" value="Search" />
</form>

<div class="flex flex-row flex-wrap justify-center">
    {#each selectedMonsters as monster (monster.id)}
        <Monster 
        monster = {monster}
        
        />
    {/each}
</div>


