const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstLi.addEventListener('click', addTech)
secondLi.addEventListener('click', addTech)
thirdLi.addEventListener('click', addTech)
let listLis = document.querySelectorAll('li');
function addTech(eventoDeOrigem) {
  for (const myLi of listLis) {
    if (myLi == eventoDeOrigem.target) {
      myLi.classList.add('tech');
    }else{
      myLi.classList.remove('tech');
    }
  }
}

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
input.addEventListener('keyup', changeText);
function changeText () {
  listLiWithTech = document.getElementsByClassName('tech');
  listLiWithTech[0].innerText = input.value;
}

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', goMyPage);
function goMyPage() {
  window.open("https://marcosadrianoti.github.io/");
}

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
myWebpage.addEventListener('mouseover', changeColor);
function changeColor() {
  myWebpage.style.color = 'yellow';
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target, que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio navegador fará esse trabalho por você, não é legal? Desse jeito, o event.target na nossa função retornará o objeto 'firstLi'.