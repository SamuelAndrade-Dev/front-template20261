import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import About from './pages/About'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Erro404 from './pages/Erro404'
import Layout from "./Layouts/Layout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='perfil/:id' element={<Perfil />} />
        <Route path="about" element={<About /> } />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path='*' element={<Erro404 />} />
    </Routes>
  )
}

export default App;