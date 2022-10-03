let mybody = document.querySelector('body');
let page = document.getElementById('page');
let inputBackgroundColor = document.getElementById('backgroundColor');
let inputColor = document.getElementById('color');
let inputFontSize = document.getElementById('fontSize');
let btn = document.getElementById('btn-configure');
// mybody.style.fontSize = '20';
btn.addEventListener('click', configPage);



function configPage() {
  mybody.style.backgroundColor = inputBackgroundColor.value;
  mybody.style.color = inputColor.value;
  // mybody.style.fontSize = inputFontSize.value + 'px';
  page.style.fontSize = inputFontSize.value + 'px';
  
}

