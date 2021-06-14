<script lang="ts">
	import { createEventDispatcher } from "svelte";
	const eventDispatcher = createEventDispatcher();
	function resetGame() {
		eventDispatcher("game.reset");
		localStorage.removeItem("game.player");
		localStorage.removeItem("game.shop");
		eventDispatcher("game.reset.finish");
	}
</script>

<button on:click={resetGame}>Reset Game</button>

<style>
	button {
		position: fixed;
		color: red;
		left: 5px;
		top: 92px;
	}
</style>
