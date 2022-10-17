let mybody = document.querySelector('body');
let page = document.getElementById('page');
let inputBackgroundColor = document.getElementById('backgroundColor');
let inputColor = document.getElementById('color');

let inputFontSize = document.getElementById('fontSize');
inputFontSize.setAttribute('min', 8);
inputFontSize.setAttribute('max', 20);

let inputSpacelines = document.getElementById('spacelines');
inputSpacelines.setAttribute('min', 8);
inputSpacelines.setAttribute('max', 30);

let inputFontFamily = document.getElementById('fontFamily');
// Busquei informação como acrescentar option em: https://www.horadecodar.com.br/2021/08/03/como-adicionar-uma-option-a-um-select-com-javascript-puro/
inputFontFamily.options[inputFontFamily.options.length] = new Option('Times New Roman', 'Times New Roman');
inputFontFamily.options[inputFontFamily.options.length] = new Option('Arial', 'Arial');
inputFontFamily.options[inputFontFamily.options.length] = new Option('Monospace', 'Monospace');

let bodyBackGrndColor = '';
let bodyColor = '';
let pageFontSize = '';
let pagelineHeight = '';
let pageFontFamily = '';
if (localStorage.getItem('backGroundColor') != null) {
  bodyBackGrndColor = localStorage.getItem('backGroundColor');
  bodyColor = localStorage.getItem('color');
  pageFontSize = localStorage.getItem('fontSize');
  pagelineHeight = localStorage.getItem('liheHeight');
  pageFontFamily = localStorage.getItem('fontFamily');
} else {
  bodyBackGrndColor = '#FFFFFF';
  bodyColor = '#000000';
  pageFontSize = '16';
  pagelineHeight = '19';
  pageFontFamily = 'Times New Roman';
}
mybody.style.backgroundColor = bodyBackGrndColor;
mybody.style.color = bodyColor;
page.style.fontSize = pageFontSize + 'px';
page.style.lineHeight = pagelineHeight + 'px';
page.style.fontFamily = pageFontFamily;
inputBackgroundColor.value = bodyBackGrndColor;
inputColor.value = bodyColor;
inputFontSize.value = pageFontSize;
inputSpacelines.value = pagelineHeight;
inputFontFamily.value = pageFontFamily;

let btn = document.getElementById('btn-configure');
btn.addEventListener('click', configPage);

function configPage() {
  mybody.style.backgroundColor = inputBackgroundColor.value;
  mybody.style.color = inputColor.value;
  page.style.fontSize = inputFontSize.value + 'px';
  page.style.lineHeight = inputSpacelines.value + 'px';
  page.style.fontFamily = inputFontFamily.value;

  saveLocalStorage();
}
function saveLocalStorage() {
  localStorage.setItem('backGroundColor', inputBackgroundColor.value);
  localStorage.setItem('color', inputColor.value);
  localStorage.setItem('fontSize', inputFontSize.value);
  localStorage.setItem('liheHeight', inputSpacelines.value);
  localStorage.setItem('fontFamily', inputFontFamily.value);
}
