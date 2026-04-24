import "./TabelaFaltas.css";

function TabelaFaltas(props) {
  return (
    <article className="bloco-semestre">
      <h3 className="semestre-titulo">{props.semestre}</h3>
      <table className="tabela-faltas">
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Total de Faltas</th>
            <th>% de Presença</th>
          </tr>
        </thead>
        <tbody>
          {props.dados.map((item, index) => (
            <tr key={index}>
              <td>{item.disciplina}</td>
              <td>{item.totalFaltas}</td>
              <td>{item.presenca}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default TabelaFaltas;
