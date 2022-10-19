const longestWord = str => {
  let arrStr = str.split(' ');
  let result = '';
  for (const word of arrStr) {
    if (word.length > result.length ) {
      result = word;
    }
  }
  console.log(result);
}
longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')