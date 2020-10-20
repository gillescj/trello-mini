<script>
    let boardName = 'Board Name';
</script>

<style type="text/scss">
    header {
        display: flex;
        input {
            background: inherit;
            font-size: 1.2rem;
            color: white;
            font-weight: 700;
            border: none;
            cursor: pointer;
        }
    }
    input:hover {
        background: hsl(202, 60%, 58%);
    }
    input:focus {
        background: white;
        color: inherit;
        cursor: text;
    }

    button {
        background: hsl(202, 60%, 50%);
        border: none;
        cursor: pointer;
        color: white;
    }
</style>

<header><input bind:value={boardName} /> <button>New Board</button></header>
