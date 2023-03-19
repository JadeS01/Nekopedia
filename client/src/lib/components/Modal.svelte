<script lang="ts">
    import type { IData } from "$lib/utils/IData";
    import type { Writable } from "svelte/store";
    export let modalData: Writable<IData>;
    export let handleState: () => void;
</script>

<div
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 modal"
>
    <div>This is the modal</div>
    <div>{$modalData.CatName}</div>
    <button on:click={handleState}>Close</button>
</div>

<style>
    .modal {
        background-color: #eeece0;
        height: 200px;
        justify-items: center;
    }
</style>
