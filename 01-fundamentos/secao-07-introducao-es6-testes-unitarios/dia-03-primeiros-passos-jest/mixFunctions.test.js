const { sum, myRemove, myFizzBuzz, encode, decode, techList } = require('./mixFunctions');

describe('Função sum', () => {
  test('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  test('Lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => { sum(4, '5') }).toThrow(Error);
  });
  test('A mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")', () => {
    expect(() => { sum(4, '5') }).toThrow('parameters must be numbers');
  });
});
describe('Função myRemove', () => {
  test('A chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('A chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('A chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
describe('Função myFizzBuzz', () => {
  test('Chamada com um número divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  test('Chamada com um número divisível por 3', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });
  test('Chamada com um número divisível por 5', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
  });
  test('Chamada com um número que não é divisível por 3 ou 5', () => {
    expect(myFizzBuzz(8)).toEqual(8);
  });
  test('Chamada com um parâmetro que não é um número', () => {
    expect(myFizzBuzz('2')).toEqual(false);
  });
});
describe('Funções encode e decode', () => {
  test('Encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  test('a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  test('1, 2, 3, 4, 5 são convertidas em a, e, i, o, u', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  test('As demais letras/números não são convertidos', () => {
    expect(encode('bcdfg')).toEqual('bcdfg');
    expect(decode('67890')).toEqual('67890');
  });
  test('A string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('bcdfg').length).toEqual('bcdfg'.length);
    expect(decode('12345').length).toEqual('aeiou'.length);
  });
});

// const techList = require('./techList.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

module.exports = techList;