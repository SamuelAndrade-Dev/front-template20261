import { NavLink, Link } from "react-router"
import "./Menu.css"

function Menu() {
    const usuarioId = 0; //pegou da API
    return (
        <nav>
            <lu>
                <li><NavLink to="/">Página Home</NavLink></li>
                <li><NavLink to={`/perfil/${usuarioId}`}>Perfil do usuário</NavLink></li>
                <li><NavLink to="/settings">Configurações</NavLink></li>
                <li><NavLink to="/about">Sobre</NavLink></li>
                <li><Link to="/login">Sair</Link></li>
            </lu>
        </nav>
    )
}

export default Menu;