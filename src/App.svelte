<script lang="ts">
  import type PlayerInterface from './interface/PlayerStat';
  import CookieButton from './CookieButton.svelte';
  import ShopList from './ui/shop.svelte';
  import { PlayerStore, ShopStore } from './stores/stores';
  import type { ShopInterface } from './interface/ShopObject';
  import SetMulti from './SetMulti.svelte';
import { convertNumber } from './utils';
import { player } from './db';

  let localPlayer: PlayerInterface;

  let betterCookieCounter = '0';

  PlayerStore.subscribe((newPlayer) => {
    localPlayer = newPlayer;
    betterCookieCounter = convertNumber(localPlayer.cookies);
  });
  let localShop: ShopInterface;
  ShopStore.subscribe((newShop) => (localShop = newShop));

  function autoBake() {
    player.cookies = player.cookies + player.perSecCookie * player.multiplier;
    PlayerStore.set(player);
  }
  setInterval(autoBake, 1000);

  // @ts-ignore
  // window.__test__set_cookie = (cookies) =>
  //   PlayerStore.update((a) => ({ ...a, cookies }));
</script>

<svelte:head>
  <title>{betterCookieCounter} Cookies</title>
</svelte:head>
<main>
  <div id="owo">
    {#if localPlayer}
      <span>Multiplier: {localPlayer.multiplier}</span>
      <SetMulti />
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
  span {
    position: fixed;
    left: 5px;
    top: 5px;
    text-align: left;
    color: white;
  }
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
