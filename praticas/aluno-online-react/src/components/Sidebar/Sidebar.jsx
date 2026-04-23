import "./Sidebar.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import learn from "../../assets/learn.svg";

function Sidebar({ mudarTela }) {
  const itens = [
    { texto: "Dashboard", rota: "dashboard" },
    { texto: "Notas", rota: "notas" },
    { texto: "Faltas", rota: "faltas" },
    { texto: "Boletos", rota: "boletos" },
    { texto: "Requerimentos", rota: "requerimentos" },
    { texto: "Sair", rota: "sair" }
  ];

  return (
    <aside className="sidebar">
      <header className="sidebar-brand">
        <img src={learn} alt="Foto do chapéu de formatura" />
        <h2>Aluno Online</h2>
      </header>

      <nav aria-label="Navegação lateral">
        <ul>
          {itens.map((item) => (
            <SidebarItem
              key={item.texto}
              texto={item.texto}
              acao={() =>
                item.rota === "sair"
                  ? console.log("Sair")
                  : mudarTela(item.rota)
              }
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
