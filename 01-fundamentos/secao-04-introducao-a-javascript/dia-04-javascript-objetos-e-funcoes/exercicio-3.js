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
let arrayTest = [2, 30, 6, 7, 10, 1];

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