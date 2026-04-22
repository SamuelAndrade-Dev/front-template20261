import "./style.css";

const botao = document.querySelector("button");

botao.addEventListener("click", (e) => {
  const matriculaInput = document.querySelector("#matricula");
  const matriculaErro = document.querySelector("matriculaErro");
  const senhaInput = document.querySelector("#senha");
  const senhaErro = document.querySelector("senhaErro");

  matriculaErro.textContent = "";
  senhaErro.textContent = "";

  if (matriculaInput.value == "") {
    matriculaErro.textContent = "Matrícula é obrigatório";
    return;
  }

  if (parseInt(matriculaInput.value) <= 0) {
    matriculaErro.textContent = "Digite um númro inteiro";
    return;
  }

  if (senhaInput.value == "") {
    senhaErro.textContent = "Senha é obrigatória";
    return;
  }

  if (senhaInput.value.length < 8) {
    senhaErro.textContent = "A senha deve conter pelo menos 8 caracteres";
    return;
  }
});
