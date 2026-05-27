import "./Sidebar.css";
import learn from "../../assets/learn.svg"
import { NavLink, Link } from "react-router";

function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="sidebar-brand">
        <img src={learn} alt="Foto do chapéu de formatura" />
        <h2>Aluno Online</h2>
      </header>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink></li>
          <li><NavLink to="/boletos" className={({ isActive }) => isActive ? 'active' : ''}>Boletos</NavLink></li>
          <li><NavLink to="/faltas" className={({ isActive }) => isActive ? 'active' : ''}>Faltas</NavLink></li>
          <li><NavLink to="/notas" className={({ isActive }) => isActive ? 'active' : ''}>Notas</NavLink></li>
          <li><NavLink to="/requerimentos" className={({ isActive }) => isActive ? 'active' : ''}>Requerimentos</NavLink></li>
          <li><Link to="/login">Sair</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
