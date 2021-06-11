<script lang="ts">
  import type PlayerInterface from './interface/PlayerStat';
  import CookieButton from './ui/CookieButton.svelte';
  import ShopList from './ui/shop.svelte';
  import { PlayerStore, ShopStore } from './stores/stores';
  import type { ShopInterface } from './interface/ShopObject';
  import SetMulti from './ui/SetMulti.svelte';
  import { convertNumber, savePlayerStats } from './utils';
  import { player } from './db';
  import ResetGameButton from './ui/ResetGameButton.svelte';

  const AUTO_BAKE_TIME = 1000;
  let betterCookieCounter = '0';
  
  function updatePlayerState(newPlayer: PlayerInterface) {
    localPlayer = newPlayer;
    betterCookieCounter = convertNumber(localPlayer.cookies);
  }
  
  let localPlayer: PlayerInterface;
  PlayerStore.subscribe((newPlayer) => updatePlayerState(newPlayer));
  
  let localShop: ShopInterface;
  ShopStore.subscribe((newShop) => (localShop = newShop));

  function autoBake() {
    player.cookies = player.cookies + player.perSecCookie * player.multiplier;
    PlayerStore.set(player);
    savePlayerStats(player);
  }
  setInterval(autoBake, AUTO_BAKE_TIME);
  
</script>

<svelte:head>
  <title>{betterCookieCounter} Cookies</title>
</svelte:head>
<main>
  <div id="owo">
    {#if localPlayer}
      <SetMulti />
      <ResetGameButton />
      {#if localPlayer}
        <h1 id="cookie">{betterCookieCounter} Cookies</h1>
      {/if}
      <h2>
        {Math.round(localPlayer.perSecCookie * localPlayer.multiplier * 1000) /
          1000} Cookies per second
      </h2>
      <h2>
        {Math.round(
          (localPlayer.perClickCookie + localPlayer.clickAddon) *
            localPlayer.multiplier *
            1000
        ) / 1000} Cookies per Click
      </h2>
      <CookieButton player={localPlayer} />
    {/if}
  </div>
  <div id="shop">
    {#if localShop}
      <ShopList shop={localShop} />
    {/if}
  </div>
</main>

<style>
  #shop {
    padding-top: 375px;
  }
  #owo {
    position: fixed;
    align-content: center;
    width: 100%;
    background-color: #400170;
  }
  #cookie {
    margin-top: 0px;
    font-size: 75px;
    margin-bottom: 0px;
    padding: 0px;
    color: magenta;
  }
  h2 {
    margin: 0px;
    color: magenta;
  }
  main {
    text-align: center;
    background-color: #400170;
    padding: 0px;
    margin: 0px;
    padding-bottom: 50px;
  }
</style>
