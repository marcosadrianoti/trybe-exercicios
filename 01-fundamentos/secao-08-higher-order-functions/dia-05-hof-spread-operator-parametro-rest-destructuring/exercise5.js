const myList = [5, 2, 3];

const swap = ([a, b, c]) => [a, b, c] = [c, b, a];

console.log(swap(myList));

module.exports = { swap, myList };
