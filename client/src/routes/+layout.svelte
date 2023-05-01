<script>
	import SideNav from '$lib/components/SideNav.svelte';
	import '../app.css';
</script>

<div class="app">
	<main class="content">
		<div class="sideNav">
			<SideNav />
		</div>
		<div class="main">
			<slot />
		</div>
	</main>

	<footer>
		<!-- <img src="../lib/images/github.svg" alt="GitHub" /> -->
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.sideNav {
		float: left;
		position: fixed;
		top: 0;
		left: 0;
		width: 17%;
		height: 100%;
		overflow-y: auto;
		z-index: 100;
	}
	.main {
		float: right;
		width: 82%;
	}
	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
