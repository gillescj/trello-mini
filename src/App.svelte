<script>
    import Board from './Board.svelte';
    import BoardBar from './BoardBar.svelte';
</script>

<style>
    body {
        background: hsl(202, 100%, 38%);
    }
    main {
        padding: 1rem;
    }
</style>

<body>
    <main>
        <BoardBar />
        <Board />
    </main>
</body>
