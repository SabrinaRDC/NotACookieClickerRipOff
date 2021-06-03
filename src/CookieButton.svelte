<script lang="ts">
  import type PlayerInterface from './interface/PlayerStat';
  import { PlayerStore } from './stores/stores';

  export let player: PlayerInterface;

  function bake() {
    const newCookieCount =
      player.cookies + (player.perClickCookie + player.clickAddon) * player.multiplier;
    player.cookies = newCookieCount;
    PlayerStore.set(player);
  }
</script>

<button on:click={bake}>Cookie</button>

<style>
  button {
    color: #ff00ff;
    text-transform: uppercase;
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    border-radius: 50px;
	border-width: 10px;
	border-color: #ff00ff;
	margin-top: 5px;
  }
</style>
