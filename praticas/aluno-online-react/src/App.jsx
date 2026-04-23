import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

import Dashboard from "./pages/Dashboard/Dashboard";
import Notas from "./pages/Notas/Notas";
import Faltas from "./pages/Faltas/Faltas";
import Boletos from "./pages/Boletos/Boletos";
import Requerimentos from "./pages/Requerimentos/Requerimentos";

function App() {
  const [telaAtiva, setTelaAtiva] = useState("dashboard");

  const paginas = {
    dashboard: {
      title: "Olá, Aluno!",
      subtitle: "Bem-vindo ao portal do aluno",
      component: <Dashboard />,
    },
    notas: {
      title: "Minhas Notas",
      subtitle: "Histórico de notas por semestre",
      component: <Notas />,
    },
    faltas: {
      title: "Minhas Faltas",
      subtitle: "Histórico de faltas por semestre",
      component: <Faltas />,
    },
    boletos: {
      title: "Financeiro",
      subtitle: "Histórico de pagamentos",
      component: <Boletos />,
    },
    requerimentos: {
      title: "Requerimentos",
      subtitle: "Solicitações acadêmicas",
      component: <Requerimentos />,
    },
  };

  const paginaAtual = paginas[telaAtiva];

  return (
    <section className="app-grid">
      <Sidebar mudarTela={setTelaAtiva} />

      <section className="main-layout">
        <Header
          title={paginaAtual.title}
          subtitle={paginaAtual.subtitle}
        />

        <main className="content-area">
          {paginaAtual.component}
        </main>
      </section>
    </section>
  );
}

export default App;