import FormLogin from "../forms/FormLogin";
import logo from "../assets/logo.svg";

function Login() {
  
  return (
    <>
      <img src={logo} alt="Imagem do Logo" />
      <h1>Aluno Online</h1>
      <FormLogin/>
    </>
  );
}

export default Login;
