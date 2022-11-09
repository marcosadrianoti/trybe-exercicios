import validator from 'validator';
import './style.css';

const inputText = document.querySelector('input');
const validations = document.querySelector('select');
const execBtn = document.querySelector('button');
const result = document.querySelector('p');

execBtn.addEventListener('click', () => {
  let valueBoolean = false;
  switch (validations.value) {
  case '1':
    valueBoolean = validator.isAlpha(inputText.value, ['pt-BR']);
    break;
  case '2':
    valueBoolean = validator.isEmail(inputText.value);
    break;
  case '3':
    valueBoolean = validator.isDivisibleBy(inputText.value, 2);
    break;
  case '4':
    valueBoolean = validator.isEmpty(inputText.value);
    break;
  case '5':
    valueBoolean = validator.isInt(inputText.value);
    break;
  case '6':
    valueBoolean = validator.isNumeric(inputText.value);
    break;
  default:
    valueBoolean = false;
    break;
  }
  result.innerHTML = valueBoolean;
});
