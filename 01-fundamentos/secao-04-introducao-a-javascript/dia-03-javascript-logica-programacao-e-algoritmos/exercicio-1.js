// Crie um algoritmo que imprima na tela o fatorial de 10

let number = 10;
let array = [];
let resultado = 1;
for (let i = number; i > 0; i -= 1) {
  array.push(i);
}
for (const element of array) {
  resultado = resultado * element;
}

console.log(resultado);