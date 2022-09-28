// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = "";
let menorPalavra = array[0];

for (let index = 0; index < array.length; index++) {
  console.log(array[index].length);
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}

console.log("Maior palavra é:", maiorPalavra);
console.log("Menor palavra é:", menorPalavra);