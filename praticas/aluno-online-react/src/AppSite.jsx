import { useState } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import Notas from './pages/Notas/Notas';
import Faltas from './pages/Faltas/Faltas';
import Boletos from './pages/Boletos/Boletos';
import Requerimentos from './pages/Requerimentos/Requerimentos';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import './App.css';


export default function AppSite() {
  const [paginaAtiva, setPaginaAtiva] = useState('dashboard');

  const getTitulo = () => {
    switch (paginaAtiva) {
      case 'dashboard': return 'Dashboard';
      case 'notas': return 'Notas';
      case 'faltas': return 'Faltas';
      case 'boletos': return 'Boletos';
      case 'requerimentos': return 'Requerimentos';
      default: return 'Dashboard';
    }
  };

  const renderConteudo = () => {
    switch (paginaAtiva) {
      case 'dashboard': return <Dashboard />;
      case 'notas': return <Notas />;
      case 'faltas': return <Faltas />;
      case 'boletos': return <Boletos />;
      case 'requerimentos': return <Requerimentos />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar setPagina={setPaginaAtiva} paginaAtiva={paginaAtiva} />
      <main className="main-content">
        <Header title={getTitulo()} />
        {renderConteudo()}
      </main>
    </div>
  );
}