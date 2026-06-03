import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import "../App.css";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email, nome: "Aluno Online" });
    navigate("/", { replace: true });
  };

  return (
    <section className="login-page">
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Digite seu e-mail"
            required
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            placeholder="Digite sua senha"
            required
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </section>
  );
}

export default Login;