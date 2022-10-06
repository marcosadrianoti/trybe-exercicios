let mybody = document.querySelector('body');
let page = document.getElementById('page');
let inputBackgroundColor = document.getElementById('backgroundColor');
let inputColor = document.getElementById('color');
inputColor.value = JSON.stringify(
  localStorage.getItem('backGroundColor'));
  console.log(localStorage.getItem('backGroundColor'));
  
  // inputColor.value = rgb(238, 215, 215);

let inputFontSize = document.getElementById('fontSize');
inputFontSize.setAttribute('min', 8);
inputFontSize.setAttribute('max', 20);

let inputSpacelines = document.getElementById('spacelines');
inputSpacelines.setAttribute('min', 8);
inputSpacelines.setAttribute('max', 30);

let fontFamily = document.getElementById('fontFamily');
// Busquei informação como acrescentar option em: https://www.horadecodar.com.br/2021/08/03/como-adicionar-uma-option-a-um-select-com-javascript-puro/
fontFamily.options[fontFamily.options.length] = new Option('Times New Roman', 'Times New Roman');
fontFamily.options[fontFamily.options.length] = new Option('Arial', 'Arial');
fontFamily.options[fontFamily.options.length] = new Option('Fantasy', 'Fantasy');

// console.log(localStorage.getItem('fontFamily'));

// if (localStorage.getItem('fontFamily' != '')){
  mybody.style.backgroundColor = localStorage.getItem('backGroundColor');
  mybody.style.color = localStorage.getItem('color');
  page.style.fontSize = localStorage.getItem('fontSize');
  page.style.lineHeight = localStorage.getItem('liheHeight');
  page.style.fontFamily = localStorage.getItem('fontFamily');
// }

let btn = document.getElementById('btn-configure');
btn.addEventListener('click', configPage);


function configPage() {
  mybody.style.backgroundColor = inputBackgroundColor.value;
  mybody.style.color = inputColor.value;
  page.style.fontSize = inputFontSize.value + 'px';
  page.style.lineHeight = inputSpacelines.value + 'px';
  page.style.fontFamily = fontFamily.value

  saveLocalStorage();
}

function saveLocalStorage(){
  localStorage.setItem('backGroundColor', mybody.style.backgroundColor);
  localStorage.setItem('color', mybody.style.color);
  localStorage.setItem('fontSize', page.style.fontSize);
  localStorage.setItem('liheHeight', page.style.lineHeight);
  localStorage.setItem('fontFamily', page.style.fontFamily);
}

