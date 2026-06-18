import './Tabela.css';

export default function Tabela({ colunas, dados }) {
  return (
    <section className="table-container">
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              {colunas.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dados.map((linha, i) => (
              <tr key={i}>
                {Object.values(linha).map((valor, j) => (
                  <td key={j}>{valor}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}