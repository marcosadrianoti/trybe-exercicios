// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// const expectedResult = 20;

function containsA(array) {
  return array.reduce((acc, curr) => {
    for (const i of curr) {
      acc += i.toLowerCase() === 'a' ? 1 : 0;
    }
    return acc;
  }, 0);
};

console.log(containsA(names));
