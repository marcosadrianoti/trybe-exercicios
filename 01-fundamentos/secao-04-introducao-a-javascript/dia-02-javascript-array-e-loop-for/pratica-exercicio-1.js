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

let mediaAritmetica = soma / numbers.length;
console.log(mediaAritmetica);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”

if (mediaAritmetica > 20) {
  console.log("valor maior que 20");
}else {
  console.log("valor menor ou igual a 20");
}