<script lang="ts">
	import CardTitle from './CardTitle.svelte';
	import Section from './Section.svelte';
	import Input from './Input.svelte';
	import CenterContent from './CenterContent.svelte';
	import CheckBox from './CheckBox.svelte';
</script>

<div class="root">
	<div class="top">
		<Section style="padding: 0 1rem 1rem 1rem;">
			<CenterContent>
				<CardTitle>Nekopedia</CardTitle>
			</CenterContent>
			<Input label="Search" placeholder="type here..." />
		</Section>
	</div>
	<div class="filters">
		<Section>
			<CenterContent>
				<CardTitle>Filters</CardTitle>
				<CheckBox label="Cats" value="cats" />
				<CheckBox label="Momentos" value="momentos" />
			</CenterContent>
		</Section>
	</div>
</div>

<style>
	.root {
		display: flex;
		flex-direction: column;
	}
	.top {
		margin-bottom: 1rem;
	}
</style>
