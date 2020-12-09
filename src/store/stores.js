import { writable } from 'svelte/store';
import { uniqueId } from 'lodash';

const sampleData = [
    {
        id: uniqueId('list-'),
        name: 'Current Tasks',
        cards: [
            { title: 'Redesign Project A3', order: 1 },
            { title: 'Research for Potential Lead', order: 2 },
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
        name: 'Finished Tasks',
        cards: [
            { title: 'Project A2', order: 1 },
            { title: 'Winter Campaign', order: 2 },
        ],
    },
];

function createBoardStore() {
    const { subscribe, set, update } = writable(sampleData);

    return {
        subscribe,
        set,
        update,
        updateName: (id, name) => {
            update((store) => {
                return store.map((list) => {
                    if (list.id === id) {
                        return { ...list, name: name };
                    } else {
                        return list;
                    }
                });
            });
        },
        updateCardList: (id, cards) => {
            update((store) => {
                return store.map((list) => {
                    if (list.id === id) {
                        return { ...list, cards: cards };
                    } else {
                        return list;
                    }
                });
            });
        },
    };
}

export const boardStore = createBoardStore();
