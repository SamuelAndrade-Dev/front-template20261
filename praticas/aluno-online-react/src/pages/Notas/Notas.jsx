import React from "react";
import "./Notas.css";
import TabelaNotas from "../../components/TabelaNotas/TabelaNotas";

function Notas() {
  const minhasNotas = [
    { disciplina: "Construção de Frontend", a1: 8.5, a2: 9.0, media: 8.8 },
    { disciplina: "BI e Data Warehousing", a1: 7.0, a2: 6.5, media: 6.8 },
    { disciplina: "Arquitetura de Software", a1: 5.0, a2: 4.0, media: 4.5 },
  ];

  const notasDisciplinas = [
    { disciplina: "Construção de BackEnd", a1: 8.5, a2: 9.0, media: 8.8 },
    { disciplina: "Estrutura de Dados", a1: 7.0, a2: 6.5, media: 6.8 },
    { disciplina: "Gerenciamento de Projetos", a1: 5.0, a2: 4.0, media: 4.5 },
  ];

  const notasSemestre = [
    { disciplina: "Banco de Dados", a1: 8.5, a2: 9.0, media: 8.8 },
    { disciplina: "Programação", a1: 7.0, a2: 6.5, media: 6.8 },
    { disciplina: "Desenvolvimento Web", a1: 5.0, a2: 4.0, media: 4.5 },
  ];

  return (
    <section className="notas-view">
      <TabelaNotas dados={minhasNotas} />
      <TabelaNotas dados={notasDisciplinas} />
      <TabelaNotas dados={notasSemestre} />
    </section>
  );
}

export default Notas;
