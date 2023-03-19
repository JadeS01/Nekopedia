<script>
	import "../app.css";
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<footer>
		<img src="../lib/images/github.svg" alt="GitHub" />
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
