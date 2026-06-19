import './Sidebar.css';
import learnLogo from '../../assets/learn.svg';
import { useAuth } from '../../contexts/useAuth.js';


export default function Sidebar({ setPagina, paginaAtiva, onNavigate }) {
  const { logout } = useAuth();

  const menus = [
    { id: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { id: 'notas', label: 'Notas', route: '/notas' },
    { id: 'faltas', label: 'Faltas', route: '/faltas' },
    { id: 'boletos', label: 'Boletos', route: '/boletos' },
    { id: 'requerimentos', label: 'Requerimentos', route: '/requerimentos' },
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
                    className={paginaAtiva === m.id || (m.id === 'requerimentos' && paginaAtiva === 'requerimentos-new') ? 'active' : ''}
                onClick={() => {
                  if (m.id === 'logout') {
                    logout();
                    window.location.pathname = '/login';
                    return;
                  }

                      if (onNavigate && m.route) {
                        onNavigate(m.route);
                      } else {
                        setPagina(m.id);
                      }
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

