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