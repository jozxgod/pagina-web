import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function Listado() {
  const navigate = useNavigate()
  const { data, cargando } = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  const recetas = data?.meals || []

  return (
    <main className="bg-[#FAF7F2] min-h-screen px-4 md:px-16 py-12">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Catálogo global</p>
      <h1 className="text-4xl md:text-5xl font-black mb-2">Todas las Recetas</h1>
      <p className="text-gray-500 mb-10">Navega, filtra y descubre platillos de los cinco continentes.</p>

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