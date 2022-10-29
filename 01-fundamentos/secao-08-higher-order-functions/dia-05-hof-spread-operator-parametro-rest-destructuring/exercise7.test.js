// Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de medida
// describe('',() => {
//   test('',() => {
//     expect().toBe();
//   });
// });
const { shipLength, ships } = require('./exercise7');

describe('Testa o funcionamento da função shipLength', () => {
  test('É uma função?', () => {
    expect(typeof shipLength).toBe('function');
  });
  test('Retorna uma string.', () => {
    expect(typeof shipLength(ships[0])).toBe('string');
    expect(typeof shipLength(ships[1])).toBe('string');
    expect(typeof shipLength(ships[2])).toBe('string');
  });
  test('Dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de medida.', () => {
    expect(shipLength(ships[0])).toStrictEqual('Titanic is 269.1 meters long');
    expect(shipLength(ships[1])).toStrictEqual('Queen Mary 2 is 1132 feet long');
    expect(shipLength(ships[2])).toStrictEqual('Yamato is 256 meters long');
  });
});
