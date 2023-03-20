<script lang="ts">
	import Card from "../lib/components/Card.svelte";
	import Modal from "../lib/components/Modal.svelte";
	import { onMount } from "svelte";
	import type { IData } from "../lib/utils/IData";
	import { writable } from "svelte/store";

	let data: IData[];
	const modalState = writable(false);
	const emptyData = {
		CatId: "",
		CatName: "",
		CatDescription: "",
		CatPersonality: "",
		CatPowerLevel: "",
		CatType: "",
		Memento: "",
		CatImage: "",
		MementoImage: "",
	};
	let modalData = writable(emptyData);

	function openModal(cat: IData) {
		modalData.set(cat);
		modalState.set(true);
	}

	function closeModal() {
		modalState.set(false);
		modalData.set(emptyData);
	}

	onMount(async () => {
		try {
			const res = await fetch("https://api.neko-atsume.emshea.com/cats");
			data = await res.json();
		} catch (error) {
			console.error(error);
		}
	});
</script>

<svelte:head>
	<title>Nekopedia</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div
	class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans font-normal text-base"
>
	{#if data}
		{#if $modalState}
			<Modal handleState={closeModal} {modalData} />
		{/if}
		{#each data as cat}
			<div class="flex-1">
				<Card {cat} {openModal} />
			</div>
		{/each}
	{:else}
		<div>nothing</div>
	{/if}
</div>
