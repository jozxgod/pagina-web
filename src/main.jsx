import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Listado from './pages/Listado'
import Filtrado from './pages/Filtrado'
import InfoAPI from './pages/InfoAPI'
import DevTeam from './pages/DevTeam'
import Detalle from './pages/Detalle'
import Navbar from './components/Navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/filtrado" element={<Filtrado />} />
        <Route path="/info-api" element={<InfoAPI />} />
        <Route path="/dev-team" element={<DevTeam />} />
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)