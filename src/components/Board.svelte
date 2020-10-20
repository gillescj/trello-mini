<script>
    import List from './List.svelte';
    import NewListButton from './NewListButton.svelte';

    let lists = [
        {
            name: 'Things To Do',
            cards: [
                { title: 'Here is a card title for testing', order: 1 },
                { title: 'Here is another riveting title', order: 2 },
            ],
        },
        {
            name: 'Bugs',
            cards: [
                { title: 'Something wrong with x', order: 1 },
                { title: 'Header scroll glitch on mobile', order: 2 },
                { title: 'Onclick not working in chrome', order: 3 },
            ],
        },
        {
            name: 'Done',
            cards: [{ title: 'Not enough', order: 1 }],
        },
    ];
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
    {#each lists as { name, cards }}
        <List {name} {cards} />
    {/each}
    <NewListButton />
</div>
