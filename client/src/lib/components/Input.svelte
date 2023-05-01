<script lang="ts">
	export let label: string;
	export let placeholder: string | undefined;
</script>

<div class="root">
	<label for="input">{label}</label>
	<input name="input" {placeholder} />
</div>

<style>
	.root {
		display: flex;
		flex-direction: column;
	}
	input {
		border-radius: 24px;
	}
</style>
