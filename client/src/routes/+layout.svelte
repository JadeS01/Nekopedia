<script>
	import "../app.css";
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<footer>
		<p>
			visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
