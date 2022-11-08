// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado.
// describe('',() => {
//   test('',() => {
//     expect().toBe();
//   });
// });
const greet = require('./exercise8');

describe('Testa o funcionamento da função greet', () => {
  test('É uma função?', () => {
    expect(typeof greet).toBe('function');
  });
  test('Retorna uma string.', () => {
    expect(typeof greet('John')).toBe('string');
    expect(typeof greet('John', 'Good morning')).toBe('string');
    expect(typeof greet('Isabela', 'Oi')).toBe('string');
  });
  test('Dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado.', () => {
    expect(greet('John')).toStrictEqual('Hi John');
    expect(greet('John', 'Good morning')).toStrictEqual('Good morning John');
    expect(greet('Isabela', 'Oi')).toStrictEqual('Oi Isabela');
  });
});
