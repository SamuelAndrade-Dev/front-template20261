import React from "react";
import "./Header.css";
import avatar from "../../assets/avatar.svg";

function Header() {
  return (
    <header className="top-header">
      <hgroup>
        <h1>Olá, Aluno!</h1>
      </hgroup>

      <figure className="perfil">
        <img src={avatar} alt="foto do perfil aluno" />
      </figure>
    </header>
  );
}

export default Header;