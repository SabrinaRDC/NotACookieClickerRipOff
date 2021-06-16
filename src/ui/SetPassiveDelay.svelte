<script lang="ts">
	import { player } from "../db";
	import type PlayerInterface from "../interface/PlayerStat";
	import { PlayerStore } from "../stores/stores";

	let localPlayer: PlayerInterface;
	PlayerStore.subscribe((newPlayer) => {
		localPlayer = newPlayer;
	});

	let setDelayInput: HTMLInputElement;
	function setDelay() {
		if (setDelayInput.valueAsNumber <= 0) {
			player.autoBakeDelay = 1;
			setDelayInput.valueAsNumber = 1;
		} else {
			player.autoBakeDelay = setDelayInput.valueAsNumber;
		}
		PlayerStore.set(player);
	}
</script>

<span>Passive Delay: {localPlayer.autoBakeDelay}(ms)</span>
<button on:click={setDelay}>Set</button>
<input
	type="number"
	id="setMulti"
	value={localPlayer.autoBakeDelay}
	bind:this={setDelayInput}
/>

<style>
	button {
		width: 50px;
		position: fixed;
		left: 70px;
		top: 118px;
	}
	#setMulti {
		position: fixed;
		left: 5px;
		top: 118px;
		width: 50px;
	}
	span {
		position: fixed;
		left: 5px;
		top: 83px;
		text-align: left;
		color: white;
	}
</style>
