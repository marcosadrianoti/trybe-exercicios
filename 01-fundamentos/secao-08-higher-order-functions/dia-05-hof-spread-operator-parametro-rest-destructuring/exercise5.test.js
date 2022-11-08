// Escreva uma função filterPeople que, dada uma lista de pessoas, retorne todas as pessoas australianas que nasceram no século 20:
// describe('',() => {
//   test('',() => {
//     expect().toBe();
//   });
// });
const { swap, myList } = require('./exercise5');
const myListStr = ['a', 'b', 'c'];

describe('Testa o funcionamento da função swap', () => {
  test('É uma função?', () => {
    expect(typeof swap).toBe('function');
  });
  test('Retorna um Array.', () => {
    expect(Array.isArray(swap(myList))).toBe(true);
  });
  test('Dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados.', () => {
    expect(swap(myList)).toStrictEqual([3, 2, 5]);
    expect(swap(myListStr)).toStrictEqual(['c', 'b', 'a']);
  });
});
