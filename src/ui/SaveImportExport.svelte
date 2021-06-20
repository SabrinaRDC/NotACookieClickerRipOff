<script lang="ts">
	import { LocalStorageKeys, player } from "../db";
import type PlayerInterface from "../interface/PlayerStat";
import type { ShopInterface } from "../interface/ShopObject";
import { PlayerStore, ShopStore } from "../stores/stores";

	async function exportSave() {
		const exportSaveString = JSON.stringify([
			JSON.parse(localStorage.getItem(LocalStorageKeys.player)),
			JSON.parse(localStorage.getItem(LocalStorageKeys.shop)),
		]);
		await navigator.clipboard.writeText(
			window.btoa(
				unescape(
					encodeURIComponent(
						exportSaveString
					)
				)
			)
		);
	}
	async function importSave() {
		const importSaveString = await navigator.clipboard.readText();
		const deBase64 = decodeURIComponent(escape(window.atob(importSaveString)));
		const [ playerParsed, shopParsed ]: [PlayerInterface, ShopInterface] = JSON.parse(deBase64);
		localStorage.setItem(LocalStorageKeys.player, JSON.stringify(playerParsed));
		localStorage.setItem(LocalStorageKeys.shop, JSON.stringify(shopParsed));
		PlayerStore.set(playerParsed);
		ShopStore.set(shopParsed);
	}
</script>

<button id="export" on:click={exportSave}>Export Save to Clipboard</button>
<button id="import" on:click={importSave}>Import Save from Clipboard</button>

<style>
	#export {
		position: fixed;
		right: 10px;
		top: 25px;
		width: 180px;
	}
	#import {
		position: fixed;
		right: 10px;
		top: 50px;
		width: 180px;
	}
</style>
