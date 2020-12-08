import { writable } from 'svelte/store';

export const boardStore = writable([
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
]);
