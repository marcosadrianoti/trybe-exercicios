// const longestWord = str => {
//   let arrStr = str.split(' ');
//   let result = '';
//   for (const word of arrStr) {
//     if (word.length > result.length ) {
//       result = word;
//     }
//   }
//   console.log(result);
// }

const longestWord = str => {
  //Fonte: https://acervolima.com/como-encontrar-a-palavra-mais-longa-dentro-da-string-em-javascript/
  let arrStr = str.split(' ');
  console.log(arrStr.sort((a, b) => b.length - a.length)[0]);
}
longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')