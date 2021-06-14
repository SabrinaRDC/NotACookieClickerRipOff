export interface ShopInterface {
	generators: GeneratorItem[],
	upgrades: UpgradeItem[],
}

interface BaseItemInterface {
	price: number,
	amount: number,
	// itemType: GeneratorType | UpgradsType,
}

type ShopItemType = {
	typeName: string;
}

export interface GeneratorType extends ShopItemType {
	readonly typeName: 'generator'
}

export interface UpgradsType extends ShopItemType {
	readonly typeName: 'upgrads'
}

export interface GeneratorItem extends BaseItemInterface {
	priceInc: number,
	perSecCookie: number,
	// itemType: GeneratorTyp
	itemType: 'generator',
}

export interface UpgradeItem extends BaseItemInterface {
	type: 'add' | 'multi' | 'addCPS',
	value: number,
	// itemType: UpgradsType,
	itemType: 'upgrade',
}
