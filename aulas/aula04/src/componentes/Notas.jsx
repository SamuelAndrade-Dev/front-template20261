import Tabela from "./Tabela";
import Layout from "./Layout";

function Notas() {
    return (
        <Layout
            titulo="Minhas Notas"
            subtitulo="Histórico de notas do semestre"
        >
            <Tabela />
        </Layout>
    );
}

export default Notas;