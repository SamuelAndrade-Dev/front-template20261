import React from 'react';
import "./Requerimentos.css";

function Requerimentos() {
    return (<>
     <section className="boletos-view">
      <header className="page-header">
        <h3>Histórico de Pagamentos</h3>
      </header>
      <article className="financeiro-card">
        <table className="boletos-table">
          <thead>
            <tr>
              <th>Tipo de Requerimento</th>
              <th>Data da Solicitação</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revisão de Menção</td>
              <td>15/12/2025</td>
              <td>Indeferido</td>
            </tr>
            <tr>
              <td>Dispensa Disciplina</td>
              <td>12/06/2025</td>
              <td>Indeferido</td>
            </tr>
            <tr>
              <td>Trancamento de Matrícula</td>
              <td>05/01/2024</td>
              <td>Deferido</td>
            </tr>
            <tr>
              <td>Mudança de Turno  </td>
              <td>10/10/2023</td>
              <td>Deferido</td>
            </tr>
            <tr>
              <td>Renovação de Matrícula</td>
              <td>20/02/2023</td>
              <td>Deferido</td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
    </>)
}

export default Requerimentos;