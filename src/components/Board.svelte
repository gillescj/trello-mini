<script>
    import List from './List.svelte';
    import NewListButton from './NewListButton.svelte';
</script>

<style type="text/scss">
    .container {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        align-items: start;
    }
</style>

<div class="container">
    <List />
    <List />
    <List />
    <List />
    <List />
    <NewListButton />
</div>
