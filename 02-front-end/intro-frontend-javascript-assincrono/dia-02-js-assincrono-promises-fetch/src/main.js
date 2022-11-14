import './style.css';
import Swal from 'sweetalert2';

const btn = document.querySelector('button');
const legend = document.querySelector('p');
const img = document.querySelector('img');

btn.addEventListener('click', () => {
  const qtHeros = 731;
  const numberRandom = Math.round(Math.random() * qtHeros);
  console.log(numberRandom);
  fetch(`https://akabab.github.io/superhero-api/api/id/${numberRandom}.json`)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.images.lg;
      legend.innerText = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Error!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Ok',
    }));
});
