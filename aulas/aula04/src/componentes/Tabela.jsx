function Tabela({ titulos, dados }) {
    return (
        <table>
            <thead>
                <tr>
                    {titulos.map((item, index) => (
                        <td key={index}>{item}</td>
                    ))}
                </tr>
                <tr>
                    <td>Valor 1</td>
                    <td>Valor 2</td>
                    <td>Valor 3</td>
                </tr>
            </thead>
            <tbody>
                {dados.map((item, index) => (
                    <tr key={index}>
                        <td>{item.vencimento}</td>
                        <td>{item.valor}</td>
                        <td>{item.situacao}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tabela;