<script>
    import { uniqueId } from 'lodash';
    import { boardStore } from '../store/stores';
    import List from './List.svelte';
    import NewListButton from './NewListButton.svelte';

    const createList = () => {
        $boardStore = [...$boardStore, { id: uniqueId('list-'), name: '', cards: [] }];
    };
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
    {#each $boardStore as { id, name, cards }}
        <List {id} {name} {cards} />
    {/each}
    <NewListButton on:addNewList={createList} />
</div>
