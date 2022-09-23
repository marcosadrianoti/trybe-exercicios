// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra

let word = 'Marcos';
let invertedWord = "";

for (let index = word.length - 1; index >= 0; index -= 1) {
  invertedWord = invertedWord + word[index];
}

console.log(invertedWord);