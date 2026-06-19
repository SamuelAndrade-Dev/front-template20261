import Layout from "../Layout";
import Tabela from "../../components/Tabela/Tabela";

export default function Requerimentos({ onCreate }) {
  const colunas = ["Tipo de Requerimento", "Data de Solicitação", "Situação"];
  const dados = [
    { tipo: "Revisão de Menção", data: "15/12/2025", status: "Indeferido" },
    { tipo: "Dispensa de Disciplina", data: "12/06/2025", status: "Indeferido" },
    { tipo: "Trancamento de Matrícula", data: "05/01/2024", status: "Deferido" }
  ];

  return (
    <Layout 
      subtitulo="Faça solicitações online para a secretaria"
    >
      <div style={{ marginBottom: '20px' }}>
        <button
          type="button"
          className="primary-button"
          onClick={() => onCreate?.()}
        >
          ➕ Novo Requerimento
        </button>
      </div>
      <Tabela colunas={colunas} dados={dados} />
    </Layout>
  );
}