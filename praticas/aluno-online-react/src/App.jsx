import { Routes, Route, Navigate } from 'react-router';
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Notas from "./pages/Notas/Notas";
import Faltas from "./pages/Faltas/Faltas";
import Boletos from "./pages/Boletos/Boletos";
import Requerimentos from "./pages/Requerimentos/Requerimentos";
import Login from "./pages/Login";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { autenticado } = useAuth();

  if (!autenticado) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
  return (
    <section className="app-grid">
      <Sidebar />

      <section className="main-layout">
        <Header title="Portal do Aluno" subtitle="Bem-vindo" />

        <main className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/notas" element={<Notas />} />
            <Route path="/faltas" element={<Faltas />} />
            <Route path="/boletos" element={<Boletos />} />
            <Route path="/requerimentos" element={<Requerimentos />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </section>
    </section>
  );
}

export default App;