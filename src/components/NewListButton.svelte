<script>
    const addNewList = () => {
        console.log('New list');
    };
</script>

<style type="text/scss">
    div {
        display: grid;
        grid-template-columns: 17rem 1rem;
        button {
            border-radius: 0.25rem;
            background: hsl(202, 60%, 50%);
            border: none;
            cursor: pointer;
            color: white;
            &:hover {
                background: hsl(202, 60%, 58%);
            }
        }
    }
</style>

<div><button on:click={addNewList}>Add New List</button></div>
