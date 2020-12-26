import { writable } from 'svelte/store';
import { uniqueId } from 'lodash';
import { swap, sortBy } from '../utils/helpers';

const sampleData = [
    {
        id: uniqueId('list-'),
        name: 'Current Tasks',
        sortOrder: 'asc',
        cards: [
            { title: 'Redesign Project A3', createdAt: 1 },
            { title: 'Research for Potential Lead', createdAt: 2 },
        ],
    },
    {
        id: uniqueId('list-'),
        name: 'Bugs',
        sortOrder: 'asc',
        cards: [
            { title: 'Something wrong with x', createdAt: 1 },
            { title: 'Header scroll glitch on mobile', createdAt: 2 },
            { title: 'Onclick not working in chrome', createdAt: 3 },
        ],
    },
    {
        id: uniqueId('list-'),
        name: 'Finished Tasks',
        sortOrder: 'asc',
        cards: [
            { title: 'Project A2', createdAt: 1 },
            { title: 'Winter Campaign', createdAt: 2 },
        ],
    },
];

function createBoardStore(key, startValue) {
    const { subscribe, set, update } = writable(startValue);

    return {
        subscribe,
        set,
        update,
        useLocalStorage: () => {
            const json = localStorage.getItem(key);
            if (json) {
                set(JSON.parse(json));
            }
            subscribe((store) => {
                localStorage.setItem(key, JSON.stringify(store));
            });
        },
        createList: (boardID) => {
            update((store) => {
                store = [...store, { id: uniqueId('list-'), name: '', cards: [] }];
                return store;
            });
        },
        updateName: (id, name) => {
            update((store) => {
                const index = store.findIndex((list) => list.id === id);
                store[index].name = name;
                return store;
            });
        },
        updateCardList: (id, cards) => {
            update((store) => {
                const index = store.findIndex((list) => list.id === id);
                store[index].cards = sortBy(cards, store[index].sortOrder);
                return store;
            });
        },
        removeList: (id) => {
            update((store) => {
                return store.filter((list) => list.id !== id);
            });
        },
        moveList: (id, where) => {
            update((store) => {
                const targetIndex = store.findIndex((list) => list.id === id);
                const swappingIndex =
                    where === 'left' ? targetIndex - 1 : targetIndex + 1;
                if (swappingIndex < 0 || swappingIndex > store.length - 1) {
                    return store;
                }
                return swap(store, targetIndex, swappingIndex);
            });
        },
        sortList: (id) => {
            update((store) => {
                const index = store.findIndex((list) => list.id === id);
                store[index].cards = sortBy(store[index].cards, store[index].sortOrder);
                return store;
            });
        },
        setCardOrder: (id, order) => {
            update((store) => {
                const index = store.findIndex((list) => list.id === id);
                store[index].sortOrder = order;
                return store;
            });
        },
    };
}

function createBoardName(key, startValue) {
    const { subscribe, set, update } = writable(startValue);

    return {
        subscribe,
        set,
        update,
        useLocalStorage: () => {
            const json = localStorage.getItem(key);
            if (json) {
                set(JSON.parse(json));
            }
            subscribe((store) => {
                localStorage.setItem(key, JSON.stringify(store));
            });
        },
    };
}

export const boardStore = createBoardStore('trello-mini-store', sampleData);
export const boardName = createBoardName('trello-mini-name', 'Board Name');
