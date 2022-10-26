let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  let checkboxPicture = document.getElementById('my-pictures').checked;
  if (checkboxPicture == false) {
    alert('Autorize o uso das imagens antes de enviar seus dados.')
  }
  let inputFullName = document.getElementById('full-name').value.length;
  let inputEmail = document.getElementById('e-mail').value.length;
  let textAreaReason = document.getElementById('longText').value.length;
  if (inputFullName < 10 || inputFullName > 40 ||
    inputEmail < 10 || inputEmail > 50 || textAreaReason > 500) {
    alert('Dados Inválidos')
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
  }
})
