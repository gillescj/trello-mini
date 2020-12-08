<script>
    import { uniqueId } from 'lodash';
    import { swap } from '../utils/helpers';
    import { boardStore } from '../store/stores';
    import List from './List.svelte';
    import NewListButton from './NewListButton.svelte';

    const createList = () => {
        $boardStore = [...$boardStore, { id: uniqueId('list-'), name: '', cards: [] }];
    };

    const removeList = (event) => {
        $boardStore = $boardStore.filter((list) => list.id !== event.detail.id);
    };

    const moveList = ({ detail: { id, where } }) => {
        const targetIndex = $boardStore.findIndex((list) => list.id === id);
        const swappingIndex = where === 'left' ? targetIndex - 1 : targetIndex + 1;
        if (swappingIndex < 0 || swappingIndex > $boardStore.length - 1) return;
        $boardStore = swap($boardStore, targetIndex, swappingIndex);
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
        <List {id} {name} {cards} on:removeList={removeList} on:moveList={moveList} />
    {/each}
    <NewListButton on:addNewList={createList} />
</div>
