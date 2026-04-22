import Tabela from "./Tabela";
import Layout from "./Layout";

function Faltas() {
    return (
        <table>
            <Layout
                titulo="Minhas Faltas"
                subtitulo="Histórico de faltas do semestre"
            />

            <Tabela />
            <Tabela />
            <Tabela />
        </table>
    )
}

export default Faltas;