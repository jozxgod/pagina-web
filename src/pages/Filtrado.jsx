import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Filtrado() {
  const [categorias, setCategorias] = useState([])
  const [areas, setAreas] = useState([])
  const [recetas, setRecetas] = useState([])
  const [cargando, setCargando] = useState(false)
  const [busqueda, setBusqueda] = useState('')
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')
  const [areaSeleccionada, setAreaSeleccionada] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data => setCategorias(data.categories))

    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then(res => res.json())
      .then(data => setAreas(data.meals))

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(res => res.json())
      .then(data => setRecetas(data.meals || []))
  }, [])

  const buscarPorNombre = () => {
    if (!busqueda.trim()) return
    setCargando(true)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busqueda}`)
      .then(res => res.json())
      .then(data => {
        setRecetas(data.meals || [])
        setCargando(false)
      })
  }

  const filtrarPorCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria)
    setCargando(true)
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`)
      .then(res => res.json())
      .then(data => {
        setRecetas(data.meals || [])
        setCargando(false)
      })
  }

  const filtrarPorArea = (area) => {
    setAreaSeleccionada(area)
    setCargando(true)
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then(res => res.json())
      .then(data => {
        setRecetas(data.meals || [])
        setCargando(false)
      })
  }

  return (
    <main className="bg-[#FAF7F2] min-h-screen px-4 md:px-16 py-12">

      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Catálogo global</p>
      <h1 className="text-4xl md:text-5xl font-black mb-2">Todas las Recetas</h1>
      <p className="text-gray-500 mb-8">Navega, filtra y descubre platillos de los cinco continentes.</p>

      {/* Formulario de filtros */}
      <div className="bg-black text-white p-6 mb-8">
        <p className="text-xs uppercase tracking-widest mb-4">▼ FILTRAR RECETAS</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Buscar por nombre */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-2">BUSCAR</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Nombre de la receta..."
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && buscarPorNombre()}
                className="bg-white text-black px-4 py-2 w-full text-sm"
              />
              <button
                onClick={buscarPorNombre}
                className="bg-red-500 text-white px-4 py-2 text-sm font-bold hover:bg-red-600"
              >
                🔍
              </button>
            </div>
          </div>

          {/* Filtrar por categoría */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-2">CATEGORÍA</p>
            <select
              value={categoriaSeleccionada}
              onChange={e => filtrarPorCategoria(e.target.value)}
              className="bg-white text-black px-4 py-2 w-full text-sm"
            >
              <option value="">Todas las categorías</option>
              {categorias.map(cat => (
                <option key={cat.idCategory} value={cat.strCategory}>
                  {cat.strCategory}
                </option>
              ))}
            </select>
          </div>

          {/* Filtrar por área */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-2">PAÍS</p>
            <select
              value={areaSeleccionada}
              onChange={e => filtrarPorArea(e.target.value)}
              className="bg-white text-black px-4 py-2 w-full text-sm"
            >
              <option value="">Todos los países</option>
              {areas.map((area, i) => (
                <option key={i} value={area.strArea}>
                  {area.strArea}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4">{recetas.length} resultados</p>
      </div>

      {/* Resultados */}
      {cargando ? (
        <p className="text-center text-gray-500 py-20">Cargando recetas...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recetas.map(receta => (
            <div
              key={receta.idMeal}
              className="cursor-pointer group"
              onClick={() => navigate(`/detalle/${receta.idMeal}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={receta.strMealThumb}
                  alt={receta.strMeal}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="pt-3">
                <h3 className="font-black text-lg">{receta.strMeal}</h3>
              </div>
            </div>
          ))}
        </div>
      )}

    </main>
  )
}

export default Filtrado