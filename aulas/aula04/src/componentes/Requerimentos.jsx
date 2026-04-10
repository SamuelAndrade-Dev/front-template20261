import Tabela from "./Tabela";
import Layout from "./Layout";

function Requerimentos() {
    return (
        <Layout
            titulo="Meus Requerimentos"
            subtitulo="Faça solicitação de requerimentos do semestre"
        >
            <Tabela />
        </Layout>
    );
}

export default Requerimentos;