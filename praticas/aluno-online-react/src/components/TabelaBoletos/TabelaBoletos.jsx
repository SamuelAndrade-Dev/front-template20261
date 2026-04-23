import "./TabelaBoletos.css";

function TabelaBoletos(props) {
  return (
    <table className="tabela-financeira">
      <thead>
        <tr>
          <th>Vencimento</th>
          <th>Valor R$</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        {props.dados.map((boleto, index) => (
          <tr key={index}>
            <td>{boleto.vencimento}</td>
            <td>{boleto.valor}</td>
            <td> {boleto.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaBoletos;