const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valido = true;

  // Reset erros
  erroEmail.textContent = "";
  erroSenha.textContent = "";

  // Validação email
  if (email.value.trim() === "") {
    erroEmail.textContent = "O campo de email é obrigatório.";
    valido = false;
  } else if (!email.value.includes("@")) {
    erroEmail.textContent = "Digite um email válido.";
    valido = false;
  }

  // Validação senha
  if (senha.value.trim() === "") {
    erroSenha.textContent = "O campo de senha é obrigatório.";
    valido = false;
  } else if (senha.value.length < 4) {
    erroSenha.textContent = "A senha deve ter no mínimo 4 caracteres.";
    valido = false;
  }

  // Se tudo estiver correto
  if (valido) {
    alert("Login realizado com sucesso!");
    form.reset();
  }
});