import "./TabelaRequerimentos.css";

function TabelaRequerimentos(props) {
  return (
    <table className="tabela-requerimentos">
      <thead>
        <tr>
          <th>Tipo de Requerimento</th>
          <th>Data de Solicitação</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        {props.dados.map((req, index) => (
          <tr key={index}>
            <td>{req.tipo}</td>
            <td>{req.data}</td>
            <td>{req.situacao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaRequerimentos;