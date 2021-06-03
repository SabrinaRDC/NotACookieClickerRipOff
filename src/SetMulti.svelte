<script lang="ts">
import { player } from "./db";
import { PlayerStore } from "./stores/stores";


    let setMultiInput: HTMLInputElement;
    function setMultiplier(){
        player.multiplier = setMultiInput.valueAsNumber;
        PlayerStore.set(player);
    };
</script>

<button on:click={setMultiplier}>Set</button>
<input type="number" id="setMulti" value="1" bind:this={setMultiInput}>

<style>
  button {
    width: 50px;
    position: fixed;
    left: 70px;
    top: 40px;
  }
  #setMulti {
		position: fixed;
		left: 5px;
		top: 40px;
		width: 50px;
	}
</style>
