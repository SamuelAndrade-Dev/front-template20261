import { createContext, useState } from "react"

// Criando o contexto de autenticação
const AuthContext = createContext();

// Crindo o provedor
function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [usuario, setUsuario] = useState({});

    const login = (dados) {
        //Chamar a Api para passar os dados
        setUsuario({ nome: "Samuel", email: "samuelandrade.spa@gmail.com" })
        setLogado(true);
    }


    const logout = () => {
        setUsuario({});
        setLogado(false)
    }

    return (
        <AuthContext.Provider value={{ logado, login, logout }}>
            {/*value= estado compartilhado */}
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };

