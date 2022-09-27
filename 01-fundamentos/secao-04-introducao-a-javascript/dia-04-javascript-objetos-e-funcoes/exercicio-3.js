// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for
function verificaPalindrome(word) {
  let reversedWord = word.split("").reverse().join("");
  if (word == reversedWord) {
    return true;
  }else{
    return false;
  }
}

console.log(verificaPalindrome("arara"));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor. Array de teste: [2, 3, 6, 7, 10, 1];
let arrayTest = [2, 30, 6, 7, 100, 1, -4];

function indiceMaiorValor(array) {
  let maiorValor = 0;
  let indiceDoMaiorValor = null;
  for (let key in array) {
    if (array[key] > maiorValor){
      maiorValor = array[key];
      indiceDoMaiorValor = key;
    }
  }
  return indiceDoMaiorValor;
}

console.log(indiceMaiorValor(arrayTest));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function indiceMenorValor(array) {
  let menorValor = array[0];
  let indiceDoMenorValor = null;
  for (let key in array) {
    if (array[key] < menorValor){
      menorValor = array[key];
      indiceDoMenorValor = key;
    }
  }
  return indiceDoMenorValor;
}

console.log(indiceMenorValor(arrayTest));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let namesArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function biggestName(names) {
  let biggestName = '';
  for (let name of names) {
    if (name.length > biggestName.length){
      biggestName = name;
    }
  }
  return biggestName;
}

console.log(biggestName(namesArray));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let Array = [2, 3, 2, 5, 8, 2, 3,];
let qtItem = 0;
let itensObjet = {};
function repetedNumber(array) {
  for (let number of array) {
    let qt = 0;
    for (let iterator of array) {
      if (number == iterator) {
        qt += 1;
      }
    }
    itensObjet[number]=qt;
  }
  let finalNumber = ''
  for (const key in itensObjet) {
    if (itensObjet[key] > qtItem){
      qtItem = itensObjet[key];
      finalNumber = key;
    }
  }
  return parseInt(finalNumber);
}

console.log(repetedNumber(Array));

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

const n = 5;
function sumNNumbers(n) {
  sum = 0;
  for (let index = 1; index <= n; index++) {
    sum = index + sum;
    
  }
  return sum;
}
console.log(sumNNumbers(n));