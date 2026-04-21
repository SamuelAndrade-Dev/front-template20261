import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <main className="dashboard-view">
      <header className="welcome-article">
        <h3>Bem-vindo ao portal do aluno-online</h3>
      </header>

      <section className="card-grid">
        <article className="card">
          <header className="card-header">
            <h2>Mural de Avisos</h2>
          </header>
          <ul>
            <li>Incrição para o projeto de extensão</li>
            <li>Eleição para representante de turma</li>
          </ul>
        </article>

        <article className="card">
          <header className="card-header">
            <h2>Calendário Acadêmico</h2>
          </header>
          <ul className="calendario-lista">
            <li>
              <strong>25/04:</strong> Prazo Final P1
            </li>
            <li>
              <strong>23/06:</strong> Prazo Final P2
            </li>
            <li>
              <strong>04/07:</strong> Fim do Período Letivo
            </li>
          </ul>
        </article>
        <article className="card">
          <header className="card-header">
            <h2>Minhas Disciplinas</h2>
          </header>
          <ul>
            <li>BI e Data Warehousing</li>
            <li>Construção de Frontend</li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export default Dashboard;
