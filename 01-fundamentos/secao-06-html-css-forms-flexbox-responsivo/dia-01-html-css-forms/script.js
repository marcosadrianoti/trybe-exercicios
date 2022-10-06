let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', function(event){
  event.preventDefault();
  let checkboxPicture = document.getElementById('my-pictures').checked;
  if (checkboxPicture == false) {
    alert('Autorize o uso das imagens antes de enviar seus dados.')
  }
})
