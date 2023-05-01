<script lang="ts">
    import type { IData } from "$lib/utils/IData";
    import type { Writable } from "svelte/store";
    import Button from "./Button.svelte";
    import CardTitle from "./CardTitle.svelte";
    import CenterContent from "./CenterContent.svelte";
    export let modalData: Writable<IData>;
    export let handleState: () => void;
</script>

<div
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 modal"
>
    <!-- <div>{$modalData.CatName}</div>
    <button on:click={handleState}>
        <Button text="Close" />
    </button> -->
    <CenterContent>
        <CardTitle text={$modalData.CatName} />
    </CenterContent>
    <CenterContent>
        <img src={$modalData.CatImage} alt="photo" />
    </CenterContent>
    <CenterContent>
        <div class="grid grid-cols-2 sm:grid-cols-2 rounded-md info">
            <div class="p-2 flex justify-end items-end">Type:</div>
            <div class="p-2">{$modalData.CatType}</div>
            <div class="p-2 flex justify-end items-end">Personality:</div>
            <div class="p-2">{$modalData.CatPersonality}</div>
            <div class="p-2 flex justify-end items-end">Power Level</div>
            <div class="p-2">{$modalData.CatPowerLevel}</div>
            <div class="p-2 flex justify-end items-end">Description:</div>
            <div class="p-2">{$modalData.CatDescription}</div>
            <div class="p-2 flex justify-end items-end">Memento:</div>
            <div class="p-2">
                <img src={$modalData.MementoImage} alt="Memento" />
                <div>{$modalData.Memento}</div>
            </div>
        </div>
    </CenterContent>
    <CenterContent>
        <button on:click={handleState}>
            <Button text={"Close"} />
        </button>
    </CenterContent>
</div>

<!-- <style>
    .card {
        background-color: #eeece0;
        border-radius: 24px;
        box-shadow: 0px 8px 0px rgba(76, 73, 65, 0.4);
    }

    /* .info {
        background-color: #f2dbdb;
    } */
</style> -->
<style>
    .modal {
        background-color: #eeece0;
        height: 200px;
        /* justify-items: center; */
    }
</style>
