<script lang="ts">
	import type { IData } from '../utils/IData';
	import Button from './Button.svelte';
	import CardTitle from './CardTitle.svelte';
	import CenterContent from './CenterContent.svelte';
	export let cat: IData;
	export let openModal: (cat: IData) => void;
</script>

<div
	class="p-4 card h-full w-full cursor-pointer"
	on:click={() => openModal(cat)}
>
	<CenterContent>
		<CardTitle>
			{cat.CatName}
		</CardTitle>
	</CenterContent>
	<CenterContent>
		<img src={cat.CatImage} alt="photo" />
	</CenterContent>
	<CenterContent>
		<div class="grid grid-cols-2 sm:grid-cols-2 rounded-md info">
			<div class="p-2 flex justify-end items-end">Type:</div>
			<div class="p-2">{cat.CatType}</div>
			<div class="p-2 flex justify-end items-end">Personality:</div>
			<div class="p-2">{cat.CatPersonality}</div>
		</div>
	</CenterContent>
	<CenterContent>
		<Button text={'See More'} on:click={() => openModal(cat)} />
	</CenterContent>
</div>

<style>
	.card {
		background-color: #eeece0;
		border-radius: 24px;
		box-shadow: 0px 8px 0px rgba(76, 73, 65, 0.4);
	}

	/* .info {
        background-color: #f2dbdb;
    } */
</style>
