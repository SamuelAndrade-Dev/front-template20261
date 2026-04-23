import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard-view">
      <header className="page-header">
        <h3>Bem Vindo ao portal do aluno</h3>
      </header>
      <section className="card-grid">
        <article className="card">
          <header className="card-header">
            <h2>Mural de Avisos</h2>
          </header>
          <ul className="card-list">
            <li>Inscrição para o projeto de extensão</li>
            <li>Eleição para representante de turma</li>
          </ul>
        </article>

        <article className="card">
          <header className="card-header">
            <h2>Calendário Acadêmico</h2>
          </header>
          <ul className="card-list">
            <li>
              <strong>23/02</strong> - Início do período letivo 2026-1
            </li>
            <li>
              <strong>25/04</strong> - Prazo final para aplicação da P1
            </li>
            <li>
              <strong>23/06</strong> - Prazo final para aplicação da P2
            </li>
            <li>
              <strong>04/07</strong> - Fim do período letivo 2026-1
            </li>
          </ul>
        </article>

        <article className="card">
          <header className="card-header">
            <h2>Minhas Disciplinas</h2>
          </header>
          <ul className="card-list">
            <li>BI e Data Warehousing</li>
            <li>Construção de Frontend</li>
            <li>Arquitetura de Software e Devops</li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default Dashboard;
