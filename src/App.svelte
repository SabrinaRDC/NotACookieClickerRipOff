<script lang="typescript">
	import type PlayerInterface from "./interface/PlayerStat";
	import CookieButton from "./ui/CookieButton.svelte";
	import ShopList from "./ui/shop.svelte";
	import { PlayerStore, ShopStore } from "./stores/stores";
	import type { ShopInterface } from "./interface/ShopObject";
	import SetMulti from "./ui/SetMulti.svelte";
	import { convertNumber, savePlayerStats } from "./utils";
	import { player, playerDefault, shopDefault } from "./db";
	import ResetGameButton from "./ui/ResetGameButton.svelte";
import SetPassiveDelay from "./ui/SetPassiveDelay.svelte";

	let enableAutoBake = true;
	let betterCookieCounter = "0";
	let betterPerSecCounter = "0";
	let betterPerClickCounter = "1";

	let localPlayer: PlayerInterface;
	let localShop: ShopInterface;

	ShopStore.subscribe((newShop) => (localShop = newShop));
	PlayerStore.subscribe((newPlayer) => updatePlayerState(newPlayer));

	function updatePlayerState(newPlayer: PlayerInterface) {
		localPlayer = newPlayer;
		betterCookieCounter = convertNumber(localPlayer.cookies);
		betterPerSecCounter = convertNumber(localPlayer.perSecCookie*localPlayer.multiplier);
		betterPerClickCounter = convertNumber((localPlayer.perClickCookie + localPlayer.clickAddon)*localPlayer.multiplier)
	}

	function autoBake() {
		if (!enableAutoBake) return;
		localPlayer.cookies =
			localPlayer.cookies +
			localPlayer.perSecCookie * localPlayer.multiplier;
		PlayerStore.set(localPlayer);
		savePlayerStats(localPlayer);
		setTimeout(() => autoBake(), player.autoBakeDelay);
	}

	autoBake();

	function resetGame() {
		PlayerStore.set(Object.assign({}, playerDefault));
		ShopStore.set(Object.assign({}, shopDefault));
	}
</script>

<svelte:head>
	<title>{betterCookieCounter} Cookies</title>
</svelte:head>
<main>
	<div id="owo">
		{#if localPlayer}
			<SetMulti />
			<SetPassiveDelay />
			<ResetGameButton on:game.reset={resetGame} />
			<span id="click_counter"
				>You clicked {localPlayer.clicked} times.</span
			>
			{#if localPlayer}
				<h1 id="cookie">{betterCookieCounter} Cookies</h1>
			{/if}
			<h2>
				{betterPerSecCounter} Cookies per second
			</h2>
			<h2>
				{betterPerClickCounter} Cookies per Click
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
	#click_counter {
		position: fixed;
		top: 5px;
		left: 5px;
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
