import { NavLink, Link } from "react-router"
import "./Menu.css"
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Menu() {
    const usuarioId = 0; //pegou da API

    const { logout } = useContext(AuthContext)

    const handleSair = () => {
        logout()
    }

    return (
        <nav>
            <ul>
                <li><NavLink to="/">Página Home</NavLink></li>
                <li><NavLink to={`/perfil/${usuarioId}`}>Perfil do usuário</NavLink></li>
                <li><NavLink to="/settings">Configurações</NavLink></li>
                <li><NavLink to="/about">Sobre</NavLink></li>
                <li><Link to="/" onClick={handleSair}>Sair</Link></li>
            </lu>
        </nav>
    )
}

export default Menu;