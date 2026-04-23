import React from "react";
import "./Header.css";
import avatar from "../../assets/avatar.svg";

function Header() {
  return (
    <header className="top-header">
      <figure className="perfil">
        <img src={avatar} alt="foto do perfil aluno" />
      </figure>
    </header>
  );
}

export default Header;
