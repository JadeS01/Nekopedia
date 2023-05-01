<script lang="ts">
	export let label: string;
	export let value: String;
</script>

<div class="root">
	<input type="checkbox" {value} />
	<label for="checkbox">{label}</label>
</div>

<style>
	.root {
	}
</style>
