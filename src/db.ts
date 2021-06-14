import type PlayerInterface from "./interface/PlayerStat";
import type { ShopInterface, UpgradsType, GeneratorType } from "./interface/ShopObject";
import { savePlayerStats, saveShopStatus } from "./utils";


export const playerDefault: PlayerInterface = Object.freeze({
	cookies: 0,
	clicked: 0,
	perSecCookie: 0,
	perClickCookie: 1,
	clickAddon: 0,
	clickCPS: 0,
	multiplier: 1,
});

export const shopDefault: ShopInterface = Object.freeze({
	upgrades: [
		{
			price: 100,
			type: 'multi',
			value: 2,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 500,
			type: 'multi',
			value: 2,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 2500,
			type: 'addCPS',
			value: 0.05,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 12500,
			type: 'multi',
			value: 2,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 50000,
			type: 'addCPS',
			value: 0.05,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 100000,
			type: 'addCPS',
			value: 0.05,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 250000,
			type: 'multi',
			value: 2,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 1000000,
			type: 'addCPS',
			value: 0.05,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 5000000,
			type: 'multi',
			value: 2,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 10000000,
			type: 'multi',
			value: 2,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 25000000,
			type: 'multi',
			value: 2,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 100000000,
			type: 'multi',
			value: 2,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 500000000,
			type: 'multi',
			value: 2,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 1000000000,
			type: 'multi',
			value: 2,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 5000000000,
			type: 'multi',
			value: 2,
			amount: 0,
			itemType: 'upgrade',
		},
		{
			price: 10000000000,
			type: 'multi',
			value: 2,
			amount: 0,
			itemType: 'upgrade',
		},
	],
	generators: [
		{
			price: 15,
			priceInc: 1.1,
			perSecCookie: 0.1,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 100,
			priceInc: 1.1,
			perSecCookie: 1,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 1000,
			priceInc: 1.1,
			perSecCookie: 5,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 10000,
			priceInc: 1.1,
			perSecCookie: 50,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 100000,
			priceInc: 1.1,
			perSecCookie: 300,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 1000000,
			priceInc: 1.1,
			perSecCookie: 1500,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 20000000,
			priceInc: 1.1,
			perSecCookie: 7500,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 250000000,
			priceInc: 1.1,
			perSecCookie: 50000,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 5000000000,
			priceInc: 1.1,
			perSecCookie: 250000,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 25000000000,
			priceInc: 1.1,
			perSecCookie: 1000000,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 50000000000,
			priceInc: 1.1,
			perSecCookie: 1500000,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 500000000000,
			priceInc: 1.1,
			perSecCookie: 10000000,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 1500000000000,
			priceInc: 1.1,
			perSecCookie: 20000000,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 5000000000000,
			priceInc: 1.1,
			perSecCookie: 50000000,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 25000000000000,
			priceInc: 1.1,
			perSecCookie: 150000000,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 100000000000000,
			priceInc: 1.1,
			perSecCookie: 500000000,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 250000000000000,
			priceInc: 1.1,
			perSecCookie: 1000000000,
			amount: 0,
			itemType: 'generator',
		},
		{
			price: 1000000000000000,
			priceInc: 1.1,
			perSecCookie: 5000000000,
			amount: 0,
			itemType: 'generator',
		},
	],
});

const savedPlayerString = localStorage.getItem('game.player');
const savedShopString = localStorage.getItem('game.shop');

const outputPlayer: PlayerInterface = savedPlayerString ? JSON.parse(savedPlayerString) : playerDefault;
const outputShop: ShopInterface = savedShopString ? JSON.parse(savedShopString) : shopDefault;

export const player = Object.assign({}, outputPlayer);
export const shop = Object.assign({}, outputShop);
