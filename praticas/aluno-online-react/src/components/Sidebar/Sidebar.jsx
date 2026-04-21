import "./Sidebar.css";
import learn from "../../assets/learn.svg";

function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="sidebar-brand">
        <img src={learn} alt="Foto do chapéu de formatura" />
        <h2>Aluno Online</h2>
      </header>

      <nav aria-label="Navegação lateral">
        <ul>
          <li><a href="#" className="active">Dashboard</a></li>
          <li><a href="#">Notas</a></li>
          <li><a href="#">Faltas</a></li>
          <li><a href="#">Boletos</a></li>
          <li><a href="#">Requerimentos</a></li>
          <li><a href="#">Sair</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;