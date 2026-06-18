import './Sidebar.css';
import learnLogo from '../../assets/learn.svg';
import { useAuth } from '../../contexts/useAuth.js';


export default function Sidebar({ setPagina, paginaAtiva }) {
  const { logout } = useAuth();

  const menus = [
    { id: 'dashboard', label: 'Dashboard', route: null },
    { id: 'notas', label: 'Notas', route: null },
    { id: 'faltas', label: 'Faltas', route: null },
    { id: 'boletos', label: 'Boletos', route: null },
    { id: 'requerimentos', label: 'Requerimentos', route: null },
    { id: 'logout', label: 'Sair', route: null },
  ];

  return (
    <aside className="sidebar-container">
      <header className="sidebar-header">
        <img src={learnLogo} alt="Logo" className="sidebar-logo-img" />
        <h1>Aluno Online</h1>
      </header>
      <nav className="sidebar-nav">
        <ul>
          {menus.map((m) => (
            <li key={m.id}>
              <button
                className={paginaAtiva === m.id ? 'active' : ''}
                onClick={() => {
                  if (m.id === 'logout') {
                    logout();
                    window.location.pathname = '/login';
                    return;
                  }

                  setPagina(m.id);
                }}
              >
                • {m.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

