import { useState } from "react";
import InputMatricula from "../componentes/inputMatricula";
import InputSenha from "../componentes/inputSenha";
import BotaoSubmit from "../componentes/BotaoSubmit";

function FormLogin() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [matriculaErro, setMatriculaErro] = useState("");
  const [senhaErro, setSenhaErro] = useState("");

  const trataSubmit = (e) => {
    e.preventDefault();

    if (!matricula) {
      setMatriculaErro("Matrícula é obrigatorio");
    }

    if (!senha) {
      setSenhaErro("Senha é obrigatório");
    }
  };

  const mudaMatricula = (e) => {
    setMatricula(e.target.value);
    setMatriculaErro("");
  };

  const mudaSenha = (e) => {
    setSenha(e.target.value);
    setSenhaErro("");
  };

  return (
    <form onSubmit={trataSubmit}>
      <InputMatricula erro={matriculaErro} mudaValor={mudaMatricula} />

      <InputSenha erro={senhaErro} mudaValor={mudaSenha} />

      <BotaoSubmit>Entrar</BotaoSubmit>
    </form>
  );
}

export default FormLogin;
