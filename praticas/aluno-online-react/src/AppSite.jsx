import { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import Notas from './pages/Notas/Notas';
import Faltas from './pages/Faltas/Faltas';
import Boletos from './pages/Boletos/Boletos';
import Requerimentos from './pages/Requerimentos/Requerimentos';
import RequerimentoForm from './forms/RequerimentoForm';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import './App.css';


const rotaParaPagina = (rota) => {
  if (rota === '/notas') return 'notas';
  if (rota === '/faltas') return 'faltas';
  if (rota === '/boletos') return 'boletos';
  if (rota === '/requerimentos/novo') return 'requerimentos-new';
  if (rota === '/requerimentos') return 'requerimentos';
  if (rota === '/' || rota === '/dashboard') return 'dashboard';
  return 'dashboard';
};

export default function AppSite({ currentPath, onPathChange }) {
  const [paginaAtiva, setPaginaAtiva] = useState(rotaParaPagina(currentPath));

  useEffect(() => {
    setPaginaAtiva(rotaParaPagina(currentPath));
  }, [currentPath]);

  const navegar = (rota) => {
    window.history.pushState(null, '', rota);
    if (onPathChange) {
      onPathChange(rota);
    } else {
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const getTitulo = () => {
    switch (paginaAtiva) {
      case 'dashboard': return 'Dashboard';
      case 'notas': return 'Notas';
      case 'faltas': return 'Faltas';
      case 'boletos': return 'Boletos';
      case 'requerimentos': return 'Meus Requerimentos';
      case 'requerimentos-new': return 'Novo Requerimento';
      default: return 'Dashboard';
    }
  };

  const renderConteudo = () => {
    switch (paginaAtiva) {
      case 'dashboard': return <Dashboard />;
      case 'notas': return <Notas />;
      case 'faltas': return <Faltas />;
      case 'boletos': return <Boletos />;
      case 'requerimentos': return <Requerimentos onCreate={() => navegar('/requerimentos/novo')} />;
      case 'requerimentos-new': return <RequerimentoForm onCancel={() => navegar('/requerimentos')} />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar setPagina={setPaginaAtiva} paginaAtiva={paginaAtiva} onNavigate={navegar} />
      <main className="main-content">
        <Header title={getTitulo()} />
        {renderConteudo()}
      </main>
    </div>
  );
}