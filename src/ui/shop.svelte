<script lang="ts">
  import { player } from '../db';
  import type {
    GeneratorItem,
    ShopInterface,
    UpgradeItem,
  } from '../interface/ShopObject';
  import { PlayerStore, ShopStore } from '../stores/stores';
  import { convertNumber, saveShopStatus } from '../utils';

  export let shop: ShopInterface;
  const shopCatagories = Object.keys(shop);

  function convertToNicerName(name: string) {
    const firstChar = name[0].toUpperCase();
    const restChars = name.slice(1, name.length);
    return `${firstChar}${restChars}`;
  }

  function buyButtonOnClick(item: UpgradeItem | GeneratorItem) {
    switch (item.itemType) {
      case 'upgrade':
        if (player.cookies >= item.price && item.amount === 0) {
          player.cookies = player.cookies - item.price;
          item.amount++;
          switch (item.type) {
            case 'add':
              player.perClickCookie = player.perClickCookie + item.value;
              break;
            case 'multi':
              player.perClickCookie = player.perClickCookie * item.value;
              break;
            case 'addCPS':
              player.clickCPS = player.clickCPS + item.value;
              updateClickAddon();
              break;
          }

          ShopStore.set(shop);
          PlayerStore.set(player);
          updateClickAddon();
        }
        break;
      case 'generator':
        if (player.cookies >= item.price) {
          player.cookies = player.cookies - item.price;
          item.amount++;
          player.perSecCookie = player.perSecCookie + item.perSecCookie;
          item.price = Math.floor(item.price * item.priceInc);
          ShopStore.set(shop);
          PlayerStore.set(player);
          updateClickAddon();
        }
        break;
    }
    saveShopStatus(shop);
  }
  function updateClickAddon() {
    player.clickAddon = player.perSecCookie * player.clickCPS;
    PlayerStore.set(player);
  }
</script>

<div class="shop">
  {#each shopCatagories as catagory}
    <div class="cat" id={catagory}>
      <h1 class="catName">{convertToNicerName(catagory)}</h1>

      {#each shop[catagory] as item}
        <button class="buyButton" on:click={(e) => buyButtonOnClick(item)}
          >Buy</button
        >

        {#if catagory === 'upgrades'}
          {#if item.type === 'add'}
            <span class="itemDescription"
              >+{item.value} to Cookies per click |
            </span>
          {/if}

          {#if item.type === 'multi'}
            <span class="itemDescription"
              >x{item.value} Cookies per click |
            </span>
          {/if}

          {#if item.type === 'addCPS'}
            <span class="itemDescription"
              >+{item.value} of CPS to Cookies per click |
            </span>
          {/if}
        {/if}

        {#if catagory === 'generators'}
          <span class="itemDescription"
            >+{convertNumber(item.perSecCookie)} Cookies per second |
          </span>
        {/if}

        <span class="itemDescription"
          >Price: {convertNumber(item.price)} |
        </span>
        <span class="itemDescription">Amount: {item.amount}</span>

        <br />
      {/each}
    </div>
  {/each}
</div>

<style>
  .catName {
    background-color: aliceblue;
    color: black;
    border: 10px dotted magenta;
  }
  .cat {
    color: white;
  }
  .buyButton {
    font-size: 30px;
    border-radius: 25px;
    width: 100px;
    background-color: #984fff;
    border-width: 5px;
    border-color: #ff0080;
  }
  .itemDescription {
    font-size: 25px;
    color: white;
  }
</style>
