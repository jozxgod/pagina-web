import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#FAF7F2] border-b border-gray-200">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="font-black text-xl tracking-tight">MUNDI</span>
        <span className="text-xs border border-gray-400 px-1">BETA</span>
      </div>

      {/* Links del centro */}
      <div className="flex gap-1">
        <Link to="/" className="px-4 py-2 hover:bg-black hover:text-white transition-colors">Inicio</Link>
        <Link to="/listado" className="px-4 py-2 hover:bg-black hover:text-white transition-colors">Recetas</Link>
        <Link to="/info-api" className="px-4 py-2 hover:bg-black hover:text-white transition-colors">API</Link>
        <Link to="/dev-team" className="px-4 py-2 hover:bg-black hover:text-white transition-colors">Equipo</Link>
        <Link to="/filtrado" className="px-4 py-2 hover:bg-black hover:text-white transition-colors">Filtrado</Link>
      </div>

      {/* Botón derecha */}
      <button className="border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
        + Contribuir
      </button>

    </nav>
  )
}

export default Navbar