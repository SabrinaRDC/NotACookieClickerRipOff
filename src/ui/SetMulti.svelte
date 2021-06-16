<script lang="ts">
	import { player } from "../db";
	import type PlayerInterface from "../interface/PlayerStat";
	import { PlayerStore } from "../stores/stores";

	let localPlayer: PlayerInterface;
	PlayerStore.subscribe((newPlayer) => {
		localPlayer = newPlayer;
	});

	let setMultiInput: HTMLInputElement;
	function setMultiplier() {
		player.multiplier = setMultiInput.valueAsNumber;
		PlayerStore.set(player);
	}
</script>

<span>Multiplier: {localPlayer.multiplier}</span>
<button on:click={setMultiplier}>Set</button>
<input
	type="number"
	id="setMulti"
	value={localPlayer.multiplier}
	bind:this={setMultiInput}
/>

<style>
	button {
		width: 50px;
		position: fixed;
		left: 70px;
		top: 55px;
	}
	#setMulti {
		position: fixed;
		left: 5px;
		top: 55px;
		width: 50px;
	}
	span {
		position: fixed;
		left: 5px;
		top: 30px;
		text-align: left;
		color: white;
	}
</style>
