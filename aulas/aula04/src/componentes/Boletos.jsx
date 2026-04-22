import Tabela from "./Tabela";

function Boletos() {
    const colunas = [
        "Vencimento",
        "Valor",
        "Situação"
    ]

    const boletos = [
        { vencimento: "01 /03 / 2026", valor: 900, situacao: "Vencido" },
        { vencimento: "01 /04 / 2026", valor: 900, situacao: "Pago" },
        { vencimento: "01 /05 / 2026", valor: 900, situacao: "A vencer" },
        { vencimento: "01 /06 / 2026", valor: 900, situacao: "Pago" },
        { vencimento: "01 /07 / 2026", valor: 900, situacao: "Pago" },
        { vencimento: "01 /08 / 2026", valor: 900, situacao: "Pago" },
    ];

    return (
        <Layout
            titulo="Meus Boletos"
            subtitulo="Histórico de boletos do semestre"
        >
            <Tabela titulos={colunas} dados={boletos} />
        </Layout>
    )
}

export default Boletos;