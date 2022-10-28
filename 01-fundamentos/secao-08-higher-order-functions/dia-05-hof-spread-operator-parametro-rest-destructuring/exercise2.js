const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum(1, 2, 3, 4, 5, 6));

module.exports = { sum };
