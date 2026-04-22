import "./Sidebar.css";
import learn from "../../assets/learn.svg";

// Recebemos "mudarTela" que enviamos lá no App.jsx
function Sidebar({ mudarTela }) {
  return (
    <aside className="sidebar">
      <header className="sidebar-brand">
        <img src={learn} alt="Foto do chapéu de formatura" />
        <h2>Aluno Online</h2>
      </header>

      <nav aria-label="Navegação lateral">
        <ul>
          <li>
            <button onClick={() => mudarTela("dashboard")}>Dashboard</button>
          </li>
          <li>
            <button onClick={() => mudarTela("notas")}>Notas</button>
          </li>
          <li>
            <button onClick={() => mudarTela("faltas")}>Faltas</button>
          </li>
          <li>
            <button onClick={() => mudarTela("boletos")}>Boletos</button>
          </li>
          <li>
            <button onClick={() => mudarTela("requerimentos")}>
              Requerimentos
            </button>
          </li>
          <li>
            <button onClick={() => console.log("Sair")}>Sair</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
