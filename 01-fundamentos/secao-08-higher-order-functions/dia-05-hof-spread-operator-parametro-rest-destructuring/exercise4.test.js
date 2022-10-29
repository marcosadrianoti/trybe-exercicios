// Escreva uma função filterPeople que, dada uma lista de pessoas, retorne todas as pessoas australianas que nasceram no século 20:
// describe('',() => {
//   test('',() => {
//     expect().toBe();
//   });
// });
const { filterPeople, people } = require('./exercise4');

describe('Testa o funcionamento da função filterPeople', () => {
  test('É uma função?', () => {
    expect(typeof filterPeople).toBe('function');
  });
  test('Retorna um Array.', () => {
    expect(Array.isArray(filterPeople(people))).toBe(true);
  });
  test('Dada uma lista de pessoas, retorne todas as pessoas australianas que nasceram no século 20.', () => {
    expect(filterPeople(people)).toStrictEqual([
      { name: 'Nicole', bornIn: 1992, nationality: 'Australian' },
      { name: 'Toby', bornIn: 1901, nationality: 'Australian' }
    ]);
  });
});