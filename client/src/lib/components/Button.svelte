<script lang="ts">
	export let text: string = 'Button';
</script>

<div class="px-4 py-2 button" {...$$restProps} on:click>
	{text}
</div>

<style>
	.button {
		background: #a4c18b;
		opacity: 0.9;
		box-shadow: inset 0px 0px 12px rgba(73, 83, 64, 0.25);
		border-radius: 24px;
		color: #384230;
		transition: transform 0.2s ease-in-out;
	}

	.button:hover {
		background: #5b6e4b;
		transform: scale(1.1);
	}
</style>
