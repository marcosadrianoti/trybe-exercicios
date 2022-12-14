function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const vogais = ['a', 'e', 'i', 'o', 'u'];
const code = [1, 2, 3, 4, 5];

function encode(text) {
  const caracters = text.split('');
  caracters.forEach((letra, i) => {
    vogais.forEach((vogal, k) => {
      caracters[i] = (letra === vogal) ? code[k] : caracters[i];
    });
  });
  return caracters.join('');
}

function decode(text) {
  const caracters = text.split('');
  caracters.forEach((caracter, i) => {
    code.forEach((num, k) => {
      caracters[i] = (caracter === num.toString()) ? vogais[k] : caracters[i];
    });
  });
  return caracters.join('');
}

const techList = (arrList, strName) => {
  if (arrList.length) {
    arrList.sort();
    let newArrList = [];
    for (const item of arrList) {
      const obj = {};
      obj.name = strName;
      obj.tech = item;
      newArrList.push(obj);
    }
    return newArrList;
  }
  return 'Vazio!';
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

const hydrate = (str) => {
  let arrNumbers = str.match(/\d/g); //https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript
  let sum = 0;
  for (const number of arrNumbers) {
    sum += parseInt(number);
  }
  let cupWater = sum === 1 ? 'copo de água' : 'copos de água'
  return `${sum} ${cupWater}`;
}
console.log(hydrate('2 shots de tequila, 2 cervejas e 1 corote'));

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate };
