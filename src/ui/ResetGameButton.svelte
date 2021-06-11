<script lang="ts">
    function resetGame() {
        localStorage.removeItem('player');
        localStorage.removeItem('shop');
        location.reload();
    }
</script>

<button on:click={resetGame}>Reset Game</button>

<style>
 button {
     position: fixed;
     color: red;
     left: 5px;
     top: 67px;
 }
</style>