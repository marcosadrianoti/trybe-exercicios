// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50 (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47)
let initialNumber = 2;
let finalNumber = 50;
let primo = true;
let maiorPrimo = null;

for (let currentNumber = initialNumber; currentNumber <= finalNumber; currentNumber++) {
  for (let i = currentNumber; i >= 2; i-=1) {
    if (currentNumber !== i && currentNumber % i == 0) {
      primo = false;
      break;
    }
  }
  if (primo == true && currentNumber > maiorPrimo) {
    maiorPrimo = currentNumber;
  }
  primo = true;
}

console.log(maiorPrimo);