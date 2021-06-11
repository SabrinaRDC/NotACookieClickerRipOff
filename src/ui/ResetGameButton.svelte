<script lang="ts">
    function resetGame() {
        localStorage.removeItem('game.player');
        localStorage.removeItem('game.shop');
        location.reload();
    }
</script>

<button on:click={resetGame}>Reset Game</button>

<style>
 button {
     position: fixed;
     color: red;
     left: 5px;
     top: 92px;
 }
</style>