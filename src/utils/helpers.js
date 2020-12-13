export const swap = (array, index1, index2) => {
    // Using array destructuring... yeah this looks way more complicated than just using a temp variable
    const newArray = [...array];
    [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
    return newArray;
};

export const sortBy = (array, direction) => {
    if (!direction) {
        return array;
    }
    if (direction === 'asc') {
        return array.sort((a, b) => a.createdAt - b.createdAt);
    } else if (direction === 'desc') {
        return array.sort((a, b) => b.createdAt - a.createdAt);
    } else {
        return array;
    }
};
