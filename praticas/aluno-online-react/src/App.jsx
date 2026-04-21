import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <section className="app-grid">
        <Sidebar />
        <section className="main-layout">
          <Header />
          <main>
            <Dashboard />
          </main>
        </section>
      </section>
    </>
  );
}

export default App;
