import Card from "../../components/Card/Card";
import "./Dashboard.css";

function Dashboard() {
  return (
    <main className="dashboard-view">
      <section className="card-grid">
        <Card
          titulo="Mural de Avisos"
          conteudo={[
            "Inscrição para o projeto de extensão",
            "Eleição para representante de turma",
          ]}
        />

        <Card
          titulo="Calendário Acadêmico"
          conteudo={[
            "23/02 - Início do período letivo 2026-1",
            "25/04 - Prazo final para aplicação da P1",
            "23/06 - Prazo final para aplicação da P2",
            "04/07 - Fim do período letivo 2026-1",
          ]}
        />

        <Card
          titulo="Minhas Disciplinas"
          conteudo={[
            "BI e Data Warehousing",
            "Construção de Frontend",
            "Arquitetura de Software",
          ]}
        />
      </section>
    </main>
  );
}

export default Dashboard;