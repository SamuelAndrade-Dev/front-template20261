import "./style.css";

const botao = document.querySelector("button");

botao.addEventListener("click", (e) => {
  const matriculaInput = document.querySelector("#matricula");
  const senhaInput = document.querySelector("#senha");

  if (matriculaInput.value == "") {
    console.log("Matrícula é obrigatório");
    return;
  } else matriculaInput.value;
});
