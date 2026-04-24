import TabelaBoletos from "../../components/TabelaBoletos/TabelaBoletos";
import "./Boletos.css";

function Boletos() {
  const dadosFinanceiros = [
    { vencimento: "19/01/2026", valor: "500,00", status: "Pago" },
    { vencimento: "19/02/2026", valor: "500,00", status: "Em atraso" },
    { vencimento: "19/03/2026", valor: "500,00", status: "A Pagar" },
    { vencimento: "19/04/2026", valor: "500,00", status: "A Pagar" },
    { vencimento: "19/05/2026", valor: "500,00", status: "A Pagar" },
    { vencimento: "19/06/2026", valor: "500,00", status: "A Pagar" },
    { vencimento: "19/07/2026", valor: "500,00", status: "A Pagar" },
    { vencimento: "19/08/2026", valor: "500,00", status: "A Pagar" },
    { vencimento: "19/09/2026", valor: "500,00", status: "A Pagar" },
    { vencimento: "19/10/2026", valor: "500,00", status: "A Pagar" },
    { vencimento: "19/11/2026", valor: "500,00", status: "A Pagar" },
    { vencimento: "19/12/2026", valor: "500,00", status: "A Pagar" },
    { vencimento: "19/01/2027", valor: "500,00", status: "A Pagar" },
  ];

  return (
    <section className="financeiro-view">
      <TabelaBoletos dados={dadosFinanceiros} />
    </section>
  );
}

export default Boletos;