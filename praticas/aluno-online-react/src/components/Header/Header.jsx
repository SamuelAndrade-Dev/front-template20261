import "./Header.css";
import avatar from "../../assets/avatar.svg";
import { useAuth } from "../../contexts/AuthContext";

function Header({ title, subtitle }) {
  const { usuario } = useAuth();
  return (
    <header className="top-header">
      <section className="header-text">
        <h2>{title}</h2>
        <h3>{subtitle ?? ""} {usuario?.nome ? `- ${usuario.nome}` : ""}</h3>
      </section>

      <figure className="perfil">
        <img src={avatar} alt="Foto do perfil do aluno" />
      </figure>
    </header>
  );
}

export default Header;