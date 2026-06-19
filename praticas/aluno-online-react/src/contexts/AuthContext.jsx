import { useMemo, useState, useEffect } from 'react';
import { AuthContext } from './createAuthContext.js';
import * as authService from '../services/authService.js';

function obterAuthSalvo() {
  const authSalvo = localStorage.getItem('auth');
  return authSalvo ? JSON.parse(authSalvo) : null;
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(obterAuthSalvo);

  const autenticado = auth !== null && !!auth.token;

  const login = async (email, senha) => {
    // allow passing an already-obtained auth object
    if (email && typeof email === 'object' && email.token) {
      setAuth(email);
      localStorage.setItem('auth', JSON.stringify(email));
      return;
    }

    const resultado = await authService.login(email, senha);
    const payload = { user: resultado.user, token: resultado.token };
    setAuth(payload);
    localStorage.setItem('auth', JSON.stringify(payload));
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('auth');
  };

  useEffect(() => {
    function onUnauthorized() {
      // clear local state and redirect to login
      setAuth(null);
      localStorage.removeItem('auth');
      window.history.replaceState(null, '', '/login');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }

    window.addEventListener('app:unauthorized', onUnauthorized);
    return () => window.removeEventListener('app:unauthorized', onUnauthorized);
  }, []);

  const value = useMemo(
    () => ({
      autenticado,
      usuario: auth ? auth.user : null,
      token: auth ? auth.token : null,
      login,
      logout,
    }),
    [autenticado, auth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}



