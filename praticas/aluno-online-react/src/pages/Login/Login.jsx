import { useState } from 'react';
import './Login.css';
import Learn from "../../assets/learn.svg";
import Input from '../../components/Input/Input'; 

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({ email: '', senha: '' });

  const validarEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let novosErros = { email: '', senha: '' };

    if (!email) {
      novosErros.email = 'O campo de email é obrigatório.';
    } else if (!validarEmail(email)) {
      novosErros.email = 'Digite um email válido.';
    }

    if (!senha) {
      novosErros.senha = 'O campo de senha é obrigatório.';
    } else if (senha.length < 6) {
      novosErros.senha = 'A senha deve ter no mínimo 6 caracteres.';
    }

    setErros(novosErros);

    if (!novosErros.email && !novosErros.senha) {
      console.log('Formulário válido ✅');
    }
  };

  return (
    <main className="page-container">
      <article className="login-card-fiel">
        <header className="card-header-fiel">
          <img src={Learn} alt="Chapéu de formatura" />
          <h1>Aluno Online</h1>
        </header>

        <form onSubmit={handleSubmit} noValidate>

          <Input 
            label="E-mail"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={erros.email}
          />

          <Input 
            label="Senha"
            type="password"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            error={erros.senha}
          />

          <button type="submit" className="btn-entrar-fiel">
            Entrar
          </button>

        </form>
      </article>

      <footer className="footer-fiel">
        <p>&copy; 2026. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}

export default Login;