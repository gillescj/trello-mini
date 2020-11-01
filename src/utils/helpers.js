export const swap = (array, index1, index2) => {
    // Using array destructuring... yeah this looks way more complicated than just using a temp variable
    const newArray = [...array];
    [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
    return newArray;
};
