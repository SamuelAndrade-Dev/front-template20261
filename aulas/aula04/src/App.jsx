import Boletos from "./componentes/Boletos";
import Dashboard from "./componentes/Dashboard";
import Faltas from "./componentes/Faltas"
import Notas from "./componentes/Notas"
import Requerimentos from './componentes/Requerimentos'

function App() {
  const pagina = 4;
  return (
    <>
      {pagina === 1 && <Dashboard />}
      {pagina === 2 && <Notas />}
      {pagina === 3 && <Faltas />}
      {pagina === 4 && <Boletos />}
      {pagina === 5 && <Requerimentos />}
    </>
  )
}

export default App
