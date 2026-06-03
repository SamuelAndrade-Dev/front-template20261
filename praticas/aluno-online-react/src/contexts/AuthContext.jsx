import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const login = (dados) => {
    setUsuario(dados);
    setAutenticado(true);
  };

  const logout = () => {
    setUsuario(null);
    setAutenticado(false);
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };