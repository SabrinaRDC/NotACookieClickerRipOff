import { writable } from 'svelte/store';
import { player, shop } from '../db';


export const PlayerStore = writable(player);
export const ShopStore = writable(shop);