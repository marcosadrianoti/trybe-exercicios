const substituaX = (name) => {
  const frase = 'Tryber x aqui!';
  let splitedFrase = frase.split(' ');
  let novaFrase = '';
  for (let index = 0; index < splitedFrase.length; index++) {
    if (splitedFrase[index] == 'x') {
      splitedFrase[index] = name;
    }
  }
  novaFrase = splitedFrase.join(' ');
  return novaFrase;
}

const minhasSkills = (minhaFrase) => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  let finalFrase = `${minhaFrase}\nMinhas três principais habilidades são:\n${skills.join('\n')}`;
  return finalFrase;
}
console.log(minhasSkills(substituaX('Marcos'))); 