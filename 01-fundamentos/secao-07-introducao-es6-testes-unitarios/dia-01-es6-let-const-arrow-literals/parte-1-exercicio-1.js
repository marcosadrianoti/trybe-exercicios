const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if).';
    ifScope = `${ifScope} Ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2, 1];

const sortOddsAndEvens = (array) => {
  let temporary = null;
  for (let index1 = 1; index1 < array.length; index1 += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index1] < array[index2]) {
        temporary = array[index1];
        array[index1] = array[index2];
        array[index2] = temporary;
      }
    }
  }

  return array;
};

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);
