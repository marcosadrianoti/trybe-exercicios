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

let fontFamily = document.getElementById('fontFamily');
fontFamily.options[fontFamily.options.length] = new Option('Times New Roman', 'Times New Roman');
fontFamily.options[fontFamily.options.length] = new Option('Arial', 'Arial');
fontFamily.options[fontFamily.options.length] = new Option('Fantasy', 'Fantasy');
// let optionFont = document.createElement('option');
// optionFont.innerText('Times');
// optionFont.setAttribute('value','Times');
// console.log(optionFont.innerText);
// fontFamily.appendChild('optionFont');



let btn = document.getElementById('btn-configure');
btn.addEventListener('click', configPage);


function configPage() {
  mybody.style.backgroundColor = inputBackgroundColor.value;
  mybody.style.color = inputColor.value;
  page.style.fontSize = inputFontSize.value + 'px';
  page.style.lineHeight = inputSpacelines.value + 'px';
  page.style.fontFamily = fontFamily.value
  
}

