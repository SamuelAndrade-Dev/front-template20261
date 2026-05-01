import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default App;