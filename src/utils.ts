import type PlayerInterface from "./interface/PlayerStat";
import type { ShopInterface } from "./interface/ShopObject";

const units = ["Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", 'Septillion', 'Octillion', 'Nonillion', 'Decillion', 'Undecillion', 'Duodecillion', 'Tredecillon', 'Quindecillion', 'Sexdecillion', 'Septendecillon']

function _convertNumber(cookie: number) {
    if (cookie >= 1000000000000000000000000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000000000000000000000000) / 100 + 'Vig');
    if (cookie >= 1000000000000000000000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000000000000000000000) / 100 + 'NovDec');
    if (cookie >= 1000000000000000000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000000000000000000) / 100 + 'OctDec');
    if (cookie >= 1000000000000000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000000000000000) / 100 + 'SepDec');
    if (cookie >= 1000000000000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000000000000) / 100 + 'SexDec');
    if (cookie >= 1000000000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000000000) / 100 + 'QuinDec');
    if (cookie >= 1000000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000000) / 100 + 'Quat');
    if (cookie >= 1000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000) / 100 + 'Tre');
    if (cookie >= 1000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000) / 100 + 'Duo');
    if (cookie >= 1000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000) / 100 + 'Und');
    if (cookie >= 1000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000) / 100 + 'Dec');
    if (cookie >= 1000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000) / 100 + 'Non');
    if (cookie >= 1000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000) / 100 + 'Oct');
    if (cookie >= 1000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000) / 100 + 'Sep');
    if (cookie >= 1000000000000000000000) return String(Math.round(cookie / 10000000000000000000) / 100 + 'Sex');
    if (cookie >= 1000000000000000000) return String(Math.round(cookie / 10000000000000000) / 100 + 'Qui');
    if (cookie >= 1000000000000000) return String(Math.round(cookie / 10000000000000) / 100 + 'Qua');
    if (cookie >= 1000000000000) return String(Math.round(cookie / 10000000000) / 100 + 'Tri');
    if (cookie >= 1000000000) return String(Math.round(cookie / 10000000) / 100 + 'Bil');
    if (cookie >= 1000000) return String(Math.round(cookie / 10000) / 100 + 'Mil');
    if (cookie >= 1000) return String(Math.round(cookie / 10) / 100 + 'k');
    if (cookie < 1000) return String(Math.round(cookie * 10) / 10);
}

// https://stackoverflow.com/questions/36734201/how-to-convert-numbers-to-million-in-javascript/36734774
function getNumberUnit(num: number) {
  const unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length);
  const r = unit % 3;
  const a = unit - r;
  const b = '1.0e+' + a;
  const c: any = Number(b);
  const x = Math.abs(num) / c.toFixed(2);
  return x.toFixed(0) + ' ' + units[Math.floor(unit / 3) - 2];
}

export function convertNumber(cookie: number) {
  if (cookie >= 10000000) return getNumberUnit(cookie);
  const amount = _convertNumber(cookie);
  return amount;
}

export function savePlayerStats(playSnapshot: PlayerInterface) {
  const playerStatsString = JSON.stringify(playSnapshot);
  localStorage.setItem('game.player', playerStatsString);
}
export function saveShopStatus(shopSnapshot: ShopInterface) {
  const shopStatusString = JSON.stringify(shopSnapshot);
  localStorage.setItem('game.shop', shopStatusString)
}
