import React from "react";
import "./Faltas.css";

function Faltas() {
  return (
    <section className="faltas-view">
      <header className="page-header">
        <h3>Histórico de Faltas por Semestre</h3>
      </header>
      <article className="semester-card">
        <header className="semester-header">
          <h2>2026.1</h2>
        </header>
        <table className="faltas-table">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Total de Faltas</th>
              <th>% de Presença</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BI e Data Warehousing</td>
              <td>0</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Construção de Frontend</td>
              <td>0</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Manutenção de Software e Devops</td>
              <td>0</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </article>

      <article className="semester-card">
        <header className="semester-header">
          <h2>2025.2</h2>
        </header>
        <table className="faltas-table">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Total de Faltas</th>
              <th>% de Presença</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Construção de Backend</td>
              <td>27</td>
              <td>87.5%</td>
            </tr>
            <tr>
              <td>Estrutura de Dados</td>
              <td>9</td>
              <td>85%</td>
            </tr>
            <tr>
              <td>Gerenciamento de Projetos</td>
              <td>10.5</td>
              <td>82.5%</td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  );
}

export default Faltas;