// Existe um objeto yearSeasons que representa as estações do ano. Cada estação é uma chave deste objeto, e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
// describe('',() => {
//   test('',() => {
//     expect().toBe();
//   });
// });
const { monthsYear, yearSeasons } = require('./exercise9');

describe('Testa o funcionamento da função monthsYear', () => {
  test('É uma função?', () => {
    expect(typeof monthsYear).toBe('function');
  });
  test('Retorna um array.', () => {
    expect(Array.isArray(monthsYear(yearSeasons))).toBe(true);
  });
  test('Dado objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.', () => {
    expect(monthsYear(yearSeasons)).toStrictEqual([
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]);
  });
});
