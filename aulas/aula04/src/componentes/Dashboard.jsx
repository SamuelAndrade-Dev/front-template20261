import Layout from "./Layout";

function Dashboard() {
    const avisos = [
        "Eleição para representante",
        "Participe do IESB-SE"
    ];

    const datas = [
        "Feriado do dia 22 tira dentes",
        "Prova de matemática dia 30"
    ];

    const disciplinas = [
        "Front-end",
        "Back-end",
        "Banco de dados"
    ]

    return (
        <Layout
            titulo="Olá, Aluno!"
            subtitulo="Bem-vindo ao portal do aluno"
        >
            <Card titulo="<Mural de Avisos" items={avisos} />
            <Card titulo="<Calendário Acadêmico" items={datas} />
            <Card titulo="<Minhas disciplinas" items={disciplinas} />
        </Layout>
    )
}

export default Dashboard;