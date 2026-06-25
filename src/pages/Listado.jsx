import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Listado() {
  const [recetas, setRecetas] = useState([])
  const [cargando, setCargando] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(res => res.json())
      .then(data => {
        setRecetas(data.meals)
        setCargando(false)
      })
  }, [])

  return (
    <main className="bg-[#FAF7F2] min-h-screen px-16 py-12">
      
      {/* Encabezado */}
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Catálogo global</p>
      <h1 className="text-5xl font-black mb-2">Todas las Recetas</h1>
      <p className="text-gray-500 mb-10">Navega, filtra y descubre platillos de los cinco continentes.</p>

      {/* Grid de recetas */}
      {cargando ? (
        <p className="text-center text-gray-500">Cargando recetas...</p>
      ) : (
        <div className="grid grid-cols-4 gap-6">
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
                <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs px-2 py-1">Seafood</span>
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

export default Listado