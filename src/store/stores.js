import { writable } from 'svelte/store';
import { uniqueId } from 'lodash';
import { swap, sortBy } from '../utils/helpers';

const sampleData = [
    {
        id: uniqueId('list-'),
        name: 'Current Tasks',
        sortOrder: 'asc',
        cards: [
            { title: 'Redesign Project A3', createdAt: 1, id: uniqueId('card-') },
            { title: 'Research for Potential Lead', createdAt: 2, id: uniqueId('card-') },
        ],
    },
    {
        id: uniqueId('list-'),
        name: 'Bugs',
        sortOrder: 'asc',
        cards: [
            { title: 'Something wrong with x', createdAt: 3, id: uniqueId('card-') },
            {
                title: 'Header scroll glitch on mobile',
                createdAt: 4,
                id: uniqueId('card-'),
            },
            {
                title: 'Onclick not working in chrome',
                createdAt: 5,
                id: uniqueId('card-'),
            },
        ],
    },
    {
        id: uniqueId('list-'),
        name: 'Finished Tasks',
        sortOrder: 'asc',
        cards: [
            { title: 'Project A2', createdAt: 6, id: uniqueId('card-') },
            { title: 'Winter Campaign', createdAt: 7, id: uniqueId('card-') },
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
        removeCard: (id, createdAt) => {
            update((store) => {
                const index = store.findIndex((list) => list.id === id);
                store[index].cards = store[index].cards.filter(
                    (card) => card.createdAt !== createdAt
                );
                return store;
            });
        },
        moveCard: (listID, cardID, where) => {
            update((store) => {
                const targetIndex = store.findIndex((list) => list.id === listID);
                const newIndex = where === 'left' ? targetIndex - 1 : targetIndex + 1;
                if (newIndex < 0 || newIndex > store.length - 1) {
                    return store;
                }
                const card = store[targetIndex].cards.filter(
                    (card) => card.id === cardID
                )[0];
                const previousListCards = store[targetIndex].cards.filter(
                    (card) => card.id !== cardID
                );
                store[targetIndex].cards = previousListCards;
                store[newIndex].cards = [...store[newIndex].cards, card];
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
