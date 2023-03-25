<script lang="ts">
	import Card from "../lib/components/Card.svelte";
	import Modal from "../lib/components/Modal.svelte";
	import { onMount } from "svelte";
	import type { IData } from "../lib/utils/IData";
	import { writable } from "svelte/store";
	import Button from "$lib/components/Button.svelte";

	let data: IData[];
	const pageSize = 6;
	let totalPages = 1;
	const currPage = writable<number>(1);
	let displayItems: IData[];
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

	function prevPage() {
		if ($currPage > 1) {
			let page = $currPage - 1;
			currPage.set(page);
			displayItems = data.slice(
				($currPage - 1) * pageSize,
				$currPage * pageSize
			);
		}
	}

	function nextPage() {
		if ($currPage < totalPages) {
			let page = $currPage + 1;
			currPage.set(page);
			displayItems = data.slice(
				($currPage - 1) * pageSize,
				$currPage * pageSize
			);
		}
	}

	onMount(async () => {
		try {
			const res = await fetch("https://api.neko-atsume.emshea.com/cats");
			data = await res.json();
			totalPages = Math.ceil(data.length / pageSize);
			displayItems = data.slice(
				($currPage - 1) * pageSize,
				$currPage * pageSize
			);
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
	{#if displayItems}
		{#if $modalState}
			<Modal handleState={closeModal} {modalData} />
		{/if}
		{#each displayItems as cat}
			<div class="flex-1">
				<Card {cat} {openModal} />
			</div>
		{/each}
		<div class="grid grid-cols-2 sm:grid-cols-2">
			<div on:click={prevPage}>
				<Button text="Back" />
			</div>
			<div on:click={nextPage}>
				<Button text="Next" />
			</div>
		</div>
	{:else}
		<div>nothing</div>
	{/if}
</div>
