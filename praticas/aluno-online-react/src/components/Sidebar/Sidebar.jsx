import './Sidebar.css';
import learnLogo from '../../assets/learn.svg';
import { useAuth } from '../../contexts/useAuth.js';

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };
  return (
    <aside className="sidebar-container">
      <header className="sidebar-header">
        <img src={learnLogo} alt="Logo" className="sidebar-logo-img" />
        <h1>Aluno Online</h1>
      </header>
      <nav className="sidebar-nav">
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink></li>
          <li><NavLink to="/boletos" className={({ isActive }) => isActive ? 'active' : ''}>Boletos</NavLink></li>
          <li><NavLink to="/faltas" className={({ isActive }) => isActive ? 'active' : ''}>Faltas</NavLink></li>
          <li><NavLink to="/notas" className={({ isActive }) => isActive ? 'active' : ''}>Notas</NavLink></li>
          <li><NavLink to="/requerimentos" className={({ isActive }) => isActive ? 'active' : ''}>Requerimentos</NavLink></li>
          <li><button className="logout-button" type="button" onClick={handleLogout}>Sair</button></li>
        </ul>
      </nav>
    </aside>
  );
}

