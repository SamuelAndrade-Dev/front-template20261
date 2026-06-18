import Layout from "../Layout";
import Card from "../../components/Card/Card";

export default function Dashboard() {
  return (
    <Layout 
      subtitulo="Bem-vindo ao portal do aluno"
    >
      <section className="dashboard-grid">
        <Card titulo="Mural de Avisos">
          <ul>
            <li>Eleição para representantes de turma</li>
            <li>Prazo para renovação de bolsa encerrando</li>
          </ul>
        </Card>
        <Card titulo="Calendário Acadêmico">
          <dl>
            <dt>23/02</dt><dd>Início do período letivo 2026-1</dd>
          </dl>
        </Card>
      </section>
    </Layout>
  );
}