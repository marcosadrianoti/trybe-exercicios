// Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa (variáveis alex e gunnar), retorna todos os gostos daquela pessoa,
// describe('',() => {
//   test('',() => {
//     expect().toBe();
//   });
// });
const { personLikes, alex, gunnar } = require('./exercise3');

describe('Testa o funcionamento da função personLikes', () => {
  test('É uma função?', () => {
    expect(typeof personLikes).toBe('function');
  });
  test('Dado um objeto, retorna todos os gostos daquela pessoa representada pelo objeto.', () => {
    expect(personLikes(alex)).toStrictEqual('Alex is 26 years old and likes fly fishing.');
    expect(personLikes(gunnar)).toStrictEqual('Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');
  });
});