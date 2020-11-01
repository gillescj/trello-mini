<script>
    import { uniqueId } from 'lodash';
    import { swap } from '../utils/helpers';
    import List from './List.svelte';
    import NewListButton from './NewListButton.svelte';

    let lists = [
        {
            id: uniqueId('list-'),
            name: 'Things To Do',
            cards: [
                { title: 'Here is a card title for testing', order: 1 },
                { title: 'Here is another riveting title', order: 2 },
            ],
        },
        {
            id: uniqueId('list-'),
            name: 'Bugs',
            cards: [
                { title: 'Something wrong with x', order: 1 },
                { title: 'Header scroll glitch on mobile', order: 2 },
                { title: 'Onclick not working in chrome', order: 3 },
            ],
        },
        {
            id: uniqueId('list-'),
            name: 'Done',
            cards: [{ title: 'Not enough', order: 1 }],
        },
    ];

    const createList = () => {
        lists = [...lists, { id: uniqueId('list-'), name: '', cards: [] }];
    };

    const removeList = (event) => {
        lists = lists.filter((list) => list.id !== event.detail.id);
    };

    const moveList = ({ detail: { id, where } }) => {
        const targetIndex = lists.findIndex((list) => list.id === id);
        const swappingIndex = where === 'left' ? targetIndex - 1 : targetIndex + 1;
        if (swappingIndex < 0 || swappingIndex > lists.length - 1) return;
        lists = swap(lists, targetIndex, swappingIndex);
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
    {#each lists as { id, name, cards }}
        <List {id} {name} {cards} on:removeList={removeList} on:moveList={moveList} />
    {/each}
    <NewListButton on:addNewList={createList} />
</div>
