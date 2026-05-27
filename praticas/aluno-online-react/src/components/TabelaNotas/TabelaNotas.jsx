import React from "react";
import "./TabelaNotas.css";

function TabelaNotas(props) {
  return (
    <table className="tabela-notas">
      <thead>
        <tr>
          <th>Disciplina</th>
          <th>A1</th>
          <th>A2</th>
          <th>Média</th>
        </tr>
      </thead>
      <tbody>
        {props.dados.map((linha, index) => (
          <tr key={index}>
            <td>{linha.disciplina}</td>
            <td>{linha.a1}</td>
            <td>{linha.a2}</td>
            <td>{linha.media}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaNotas;
