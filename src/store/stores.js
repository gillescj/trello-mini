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
                        return {
                            ...list,
                            cards: sortBy(cards, list.sortOrder),
                        };
                    } else {
                        return list;
                    }
                });
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
                return store.map((list) => {
                    if (list.id === id) {
                        return {
                            ...list,
                            cards: sortBy(list.cards, list.sortOrder),
                        };
                    } else {
                        return list;
                    }
                });
            });
        },
        setCardOrder: (id, order) => {
            update((store) => {
                return store.map((list) => {
                    if (list.id === id) {
                        return {
                            ...list,
                            sortOrder: order,
                        };
                    } else {
                        return list;
                    }
                });
            });
        },
    };
}

export const boardStore = createBoardStore();
