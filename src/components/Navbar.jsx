import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-[#FAF7F2] border-b border-gray-200">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="font-black text-xl tracking-tight">KORÜ</span>
        <span className="text-xs border border-gray-400 px-1">BETA</span>
      </div>

      {/* Links escritorio */}
      <div className="hidden md:flex gap-1">
        <Link to="/" className="px-4 py-2 hover:bg-black hover:text-white transition-colors">Inicio</Link>
        <Link to="/listado" className="px-4 py-2 hover:bg-black hover:text-white transition-colors">Recetas</Link>
        <Link to="/info-api" className="px-4 py-2 hover:bg-black hover:text-white transition-colors">API</Link>
        <Link to="/dev-team" className="px-4 py-2 hover:bg-black hover:text-white transition-colors">Equipo</Link>
        <Link to="/filtrado" className="px-4 py-2 hover:bg-black hover:text-white transition-colors">Filtrado</Link>
        <Link to="/aleatoria" className="px-4 py-2 hover:bg-black hover:text-white transition-colors">🎲 Aleatoria</Link>
      </div>

      {/* Botón escritorio */}
      <button className="hidden md:block border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
        + Contribuir
      </button>

      {/* Botón hamburguesa móvil */}
      <button
        className="md:hidden font-bold text-xl"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? '✕' : '☰'}
      </button>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="absolute top-16 left-0 right-0 bg-[#FAF7F2] border-b border-gray-200 flex flex-col z-50">
          <Link to="/" onClick={() => setMenuAbierto(false)} className="px-8 py-4 hover:bg-black hover:text-white transition-colors">Inicio</Link>
          <Link to="/listado" onClick={() => setMenuAbierto(false)} className="px-8 py-4 hover:bg-black hover:text-white transition-colors">Recetas</Link>
          <Link to="/info-api" onClick={() => setMenuAbierto(false)} className="px-8 py-4 hover:bg-black hover:text-white transition-colors">API</Link>
          <Link to="/dev-team" onClick={() => setMenuAbierto(false)} className="px-8 py-4 hover:bg-black hover:text-white transition-colors">Equipo</Link>
          <Link to="/filtrado" onClick={() => setMenuAbierto(false)} className="px-8 py-4 hover:bg-black hover:text-white transition-colors">Filtrado</Link>
          <Link to="/aleatoria" onClick={() => setMenuAbierto(false)} className="px-8 py-4 hover:bg-black hover:text-white transition-colors">🎲 Aleatoria</Link>
        </div>
      )}

    </nav>
  )
}

export default Navbar