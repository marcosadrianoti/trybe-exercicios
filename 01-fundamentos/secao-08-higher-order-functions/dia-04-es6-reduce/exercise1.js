const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(array) {
  return array.reduce((acc, curr) => {
    curr.map((element) => acc.push(element))
    return acc;
  }, []);
}

console.log(flatten(arrays));
