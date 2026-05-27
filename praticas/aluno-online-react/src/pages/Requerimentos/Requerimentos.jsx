import TabelaRequerimentos from "../../components/TabelaRequerimentos/TabelaRequerimentos";
import "./Requerimentos.css";

function Requerimentos() {
  const dadosRequerimentos = [
    { tipo: "Revisão de Menção", data: "15/12/2025", situacao: "Indeferido" },
    { tipo: "Dispensa de Disciplina", data: "12/06/2025", situacao: "Indeferido" },
    { tipo: "Trancamento de Matrícula", data: "05/01/2024", situacao: "Deferido" },
    { tipo: "Mudança de Turno", data: "10/10/2023", situacao: "Deferido" },
    { tipo: "Renovação de Matrícula", data: "20/02/2023", situacao: "Deferido" },
  ];

  return (
    <section className="requerimentos-view">
      <TabelaRequerimentos dados={dadosRequerimentos} />
    </section>
  );
}

export default Requerimentos;