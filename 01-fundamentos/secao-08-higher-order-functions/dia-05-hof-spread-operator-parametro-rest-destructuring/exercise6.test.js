// Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é representado dentro de um array. Então seu chefe pede que seja mudado o formato de array para objeto. Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro
// describe('',() => {
//   test('',() => {
//     expect().toBe();
//   });
// });
const { toObject, palio, shelbyCobra, chiron } = require('./exercise6');

describe('Testa o funcionamento da função toObject', () => {
  test('É uma função?', () => {
    expect(typeof toObject).toBe('function');
  });
  test('Retorna um Objeto.', () => {
    expect(typeof toObject(palio)).toBe('object');
    expect(typeof toObject(shelbyCobra)).toBe('object');
    expect(typeof toObject(chiron)).toBe('object');
  });
  test('Dada uma lista (Array), retorna um objeto representando o carro.', () => {
    expect(toObject(palio)).toStrictEqual({ nome: 'Palio', marca: 'Fiat', ano: 2019 });
    expect(toObject(shelbyCobra)).toStrictEqual({ nome: 'Shelby Cobra', marca: 'Ford', ano: 1963 });
    expect(toObject(chiron)).toStrictEqual({ nome: 'Chiron', marca: 'Bugatti', ano: 2016 });
  });
});
