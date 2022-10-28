// Dado o código abaixo, altere a chamada da função rectangleArea de forma que seja impressa a área dos 3 retângulos (rectangle1, rectangle2 e rectangle3). O código deve retornar em sequência 2, 15 e 54.

// describe('',() => {
//   test('',() => {
//     expect().toBe();
//   });
// });
const { rectangleArea, rectangle1, rectangle2, rectangle3 } = require('./exercise1');

describe('Testa o funcionamento da função rectangleArea', () => {
  test('É uma função?', () => {
    expect(typeof rectangleArea).toBe('function');
  });
  test('A função deve retonar em sequência 2, 15 e 54', () => {
    expect(rectangleArea(...rectangle1)).toStrictEqual(2);
    expect(rectangleArea(...rectangle2)).toStrictEqual(15);
    expect(rectangleArea(...rectangle3)).toStrictEqual(54);
  });
});