import './Header.css';
import avatarIcon from '../../assets/avatar.svg';
import { useAuth } from '../../contexts/useAuth.js';

export default function Header({ title }) {
  const { usuario } = useAuth();

  return (
    <header className="page-header">
      <h2 className="title">{title}</h2>
      <figure className="profile-container">
        <img src={avatarIcon} alt="Avatar" className="avatar-img" />
        {usuario && <span className="user-name">{usuario.email}</span>}
      </figure>
    </header>
  );
}