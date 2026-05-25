import TabelaFaltas from "../../components/TabelaFaltas/TabelaFaltas";
import "./Faltas.css";

function Faltas() {
  const dados2026 = [
    { disciplina: "BI e Data Warehousing", totalFaltas: 0, presenca: "100%" },
    { disciplina: "Construção de Frontend", totalFaltas: 0, presenca: "100%" },
    { disciplina: "Manutenção de Software e Devops", totalFaltas: 0, presenca: "100%" }
  ];

  const dados2025 = [
    { disciplina: "Construção de Backend", totalFaltas: 27, presenca: "87.5%" },
    { disciplina: "Estrutura de Dados", totalFaltas: 9, presenca: "85%" },
    { disciplina: "Gerenciamento de Projetos", totalFaltas: 10.5, presenca: "82.5%" }
  ];

  return (
    <section className="faltas-view">
      <TabelaFaltas semestre="2026.1" dados={dados2026} />
      <TabelaFaltas semestre="2025.2" dados={dados2025} />
    </section>
  );
}

export default Faltas;