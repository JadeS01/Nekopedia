<script lang="ts">
    import type { IData } from "../utils/IData";
    export let cat: IData;
    export let openModal: (cat: IData) => void;
</script>

<div class="p-4 border rounded-md card">
    <div>{cat.CatName}</div>
    <img src={cat.CatImage} />

    <div class="flex justify-between">
        <div>{cat.CatType}</div>
        <div>{cat.CatPersonality}</div>
    </div>
    <button on:click={() => openModal(cat)}>See More</button>
</div>

<style>
    .card {
        background-color: #eeece0;
    }
</style>
