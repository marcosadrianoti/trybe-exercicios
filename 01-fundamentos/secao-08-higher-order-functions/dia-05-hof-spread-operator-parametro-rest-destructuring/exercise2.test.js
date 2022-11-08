// Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.
// describe('',() => {
//   test('',() => {
//     expect().toBe();
//   });
// });
const { sum } = require('./exercise2');

describe('Testa o funcionamento da função sum', () => {
  test('É uma função?', () => {
    expect(typeof sum).toBe('function');
  });
  test('Dado um número ilimitado de parâmetros retorna a soma desses parâmetros', () => {
    expect(sum(4, 5, 6)).toStrictEqual(15);
    expect(sum(1, 2, 3, 4)).toStrictEqual(10);
    expect(sum(1, 2, 3, 4, 5, 6)).toStrictEqual(21);
  });
});