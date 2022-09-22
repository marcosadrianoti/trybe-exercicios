let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = null;

// Percorra o array imprimindo todos os valores nele contidos com a função console.log()

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

// Some todos os valores contidos no array e imprima o resultado

for (let index = 0; index < numbers.length; index++) {
  soma = soma + numbers[index];
}
console.log("Soma dos elementos do array: " + soma);

// Calcule e imprima a média aritmética dos valores contidos no array

console.log(soma / numbers.length);