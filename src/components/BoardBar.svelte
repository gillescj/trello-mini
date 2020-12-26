<script>
    let boardName = "Board Name";
</script>

<style type="text/scss">
    header {
        display: flex;
        padding: 0.5rem;
        input {
            background: inherit;
            font-size: 1.2rem;
            color: white;
            font-weight: 700;
            margin-bottom: 0;
            margin-right: 0.5rem;
            border: none;
            cursor: pointer;
            &:hover {
                background: hsl(202, 60%, 58%);
            }
            &:focus {
                background: white;
                color: inherit;
                cursor: text;
            }
        }

        button {
            background: hsl(202, 60%, 50%);
            border: none;
            cursor: pointer;
            color: white;
            margin-bottom: 0;
            &:hover {
                background: hsl(202, 60%, 58%);
            }
        }
    }
</style>

<header><input bind:value={boardName} /> <button>New Board</button></header>
