import "./Header.css";
import avatar from "../../assets/avatar.svg";

function Header({ title, subtitle }) {
  return (
    <header className="top-header">
      <section className="header-text">
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
      </section>

      <figure className="perfil">
        <img src={avatar} alt="Foto do perfil do aluno" />
      </figure>
    </header>
  );
}

export default Header;