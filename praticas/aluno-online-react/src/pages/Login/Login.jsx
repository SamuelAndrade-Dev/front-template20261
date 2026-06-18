import { useState } from 'react';

import EmailInput from '../../components/Login/EmailInput/EmailInput';
import PasswordInput from '../../components/Login/PasswordInput/PasswordInput';
import { useAuth } from '../../contexts/useAuth.js';


import './Login.css';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const validarEmail = (valor) => {
    if (!valor) return false;
    const formatoBasicoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formatoBasicoEmail.test(valor);
  };

  const validarDados = () => {
    let valido = true;

    if (!email.trim()) {
      setErrorEmail('Email é obrigatório.');
      valido = false;
    } else if (!validarEmail(email.trim())) {
      setErrorEmail('Informe um e-mail válido.');
      valido = false;
    } else {
      setErrorEmail('');
    }

    if (!password) {
      setErrorPassword('Senha é obrigatória.');
      valido = false;
    } else if (password.length < 6) {
      setErrorPassword('A senha deve ter no mínimo 6 caracteres.');
      valido = false;
    } else {
      setErrorPassword('');
    }

    return valido;
  };

  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    const valido = validarDados();
    if (!valido) return;

    login({
      email: email.trim(),
    });

    // Aguarda um pequeno delay para o estado atualizar
    setTimeout(() => {
      window.location.href = '/';
    }, 100);
  };


  return (
    <main className="login-container">
      <header className="login-header">
        <h1>Aluno Online</h1>
      </header>

      <form id="login-form" novalidate onSubmit={handleSubmit}>
        <EmailInput value={email} onChange={setEmail} error={errorEmail} />
        <PasswordInput value={password} onChange={setPassword} error={errorPassword} />

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}

