<script>
    import Board from "./Board.svelte";
    import BoardBar from "./BoardBar.svelte";
    import { boardStore, boardName } from "../store/stores";

    boardStore.useLocalStorage();
    boardName.useLocalStorage();
</script>

<style>
    body {
        background: hsl(202, 100%, 38%);
    }
    main {
        display: grid;
        grid-template-rows: auto 1fr;
        height: 100%;
    }
</style>

<body>
    <main>
        <BoardBar />
        <Board />
    </main>
</body>
