import { useMemo, useState } from 'react';
import { AuthContext } from './createAuthContext.js';

function obterUsuarioSalvo() {
  const usuarioSalvo = localStorage.getItem('usuario');
  return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
}

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(obterUsuarioSalvo);

  const autenticado = usuario !== null;

  const login = (dadosUsuario) => {
    setUsuario(dadosUsuario || {});
    localStorage.setItem('usuario', JSON.stringify(dadosUsuario || {}));
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('usuario');
  };

  const value = useMemo(
    () => ({
      autenticado,
      usuario,
      login,
      logout,
    }),
    [autenticado, usuario]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}



