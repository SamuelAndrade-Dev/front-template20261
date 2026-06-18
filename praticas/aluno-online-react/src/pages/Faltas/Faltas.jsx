import Layout from "../Layout";
import Tabela from "../../components/Tabela/Tabela";

export default function Faltas() {
  const colunas = ["Disciplina", "Total de Faltas", "% de Presença"];
  const dados = [
    { nome: 'BI e Data Warehousing', total: 0, presenca: '100%' },
    { nome: 'Construção de Frontend', total: 0, presenca: '100%' },
    { nome: 'Manutenção de Software e Devops', total: 0, presenca: '100%' }
  ];

  return (
    <Layout 
      subtitulo="Histórico de Faltas por Semestre"
    >
      <Tabela colunas={colunas} dados={dados} />
    </Layout>
  );
}