/*================= JAVASCRIPT =================*/
document.addEventListener('DOMContentLoaded', function () {
  const formValidate = document.getElementById('formValidate');
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');

  if (formValidate) {
    formValidate.addEventListener('submit', function (event) {
      event.preventDefault();
      const isValid = validateForm();
      if (isValid) {
        alert('Formulário enviado com sucesso!');
        formValidate.reset();
        removeErrorStyles();
      }
    });
  }

  function validateForm() {
    let valid = true;

    if (!validateNome()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateSenha()) valid = false;

    return valid;
  }

  function validateNome() {
    const nomeErro = document.getElementById('nomeErro');
    if (nome.value.trim() === '') {
      nomeErro.textContent = 'Nome é obrigatório';
      nome.classList.add('input-error');
      return false;
    } else {
      nomeErro.textContent = '';
      nome.classList.remove('input-error');
      return true;
    }
  }

  function validateEmail() {
    const emailErro = document.getElementById('emailErro');
    if (!isEmailValid(email.value)) {
      emailErro.textContent = 'E-mail inválido';
      email.classList.add('input-error');
      return false;
    } else {
      emailErro.textContent = '';
      email.classList.remove('input-error');
      return true;
    }
  }

  function validateSenha() {
    const senhaErro = document.getElementById('senhaErro');
    if (senha.value.length < 8) {
      senhaErro.textContent = 'A senha deve ter pelo menos 8 caracteres';
      senha.classList.add('input-error');
      return false;
    } else {
      senhaErro.textContent = '';
      senha.classList.remove('input-error');
      return true;
    }
  }

  function isEmailValid(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function removeErrorStyles() {
    nome.classList.remove('input-error');
    email.classList.remove('input-error');
    senha.classList.remove('input-error');
  }
});




