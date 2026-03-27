import './App.css';
import logo from './assets/learn.svg'

function Cabecalho() {
  return (
    <header>
      <h1>Cabeçalho</h1>
    </header>
  )
}

function App() {
  {
    // <div>
    //   <Cabecalho></Cabecalho>
    //   <div> {2 + 2} </div>
    //   <img src={logo} alt="" />
    //   <p>O resultado é</p>
    // </div>
  }
  return (
    < main >
      <img src={logo} alt="Icone do chapeu de formatura" />
      <h1>Aluno online</h1>
      <label htmlFor="matricula">Matrícula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matriculaErro"></p>
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" />
      <p id="senhaErro"></p>
      <button type="submit">Entrar</button>
    </main >
  );
}

export default App;

