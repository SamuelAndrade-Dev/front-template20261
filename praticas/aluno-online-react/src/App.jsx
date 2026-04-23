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

  const renderizarTela = () => {
    switch (telaAtiva) {
      case "dashboard":
        return <Dashboard />;
      case "notas":
        return <Notas />;
      case "faltas":
        return <Faltas />;
      case "boletos":
        return <Boletos />;
      case "requerimentos":
        return <Requerimentos />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <section className="app-grid">
      <Sidebar mudarTela={setTelaAtiva} />

      <section className="main-layout">
        <Header />

        <header className="dynamic-header">
          {telaAtiva === "dashboard" && <h1>Olá, Aluno!</h1>}
          {telaAtiva === "notas" && <h1>Minhas Notas</h1>}
          {telaAtiva === "faltas" && <h1>Minhas Faltas</h1>}
          {telaAtiva === "boletos" && <h1>Financeiro</h1>}
          {telaAtiva === "requerimentos" && <h1>Requerimentos</h1>}
        </header>

        <main className="content-area">{renderizarTela()}</main>
      </section>
    </section>
  );
}

export default App;
