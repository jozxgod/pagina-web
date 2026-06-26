import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Aleatoria() {
  const [receta, setReceta] = useState(null)
  const [cargando, setCargando] = useState(false)
  const navigate = useNavigate()

  const obtenerRecetaAleatoria = () => {
    setCargando(true)
    setReceta(null)
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(data => {
        setReceta(data.meals[0])
        setCargando(false)
      })
  }

  const ingredientes = receta ? (() => {
    const lista = []
    for (let i = 1; i <= 20; i++) {
      const ingrediente = receta[`strIngredient${i}`]
      const medida = receta[`strMeasure${i}`]
      if (ingrediente && ingrediente.trim()) {
        lista.push(`${medida} ${ingrediente}`.trim())
      }
    }
    return lista
  })() : []

  return (
    <main className="bg-[#FAF7F2] min-h-screen px-4 md:px-16 py-12">

      {/* Encabezado */}
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Página anexa</p>
      <h1 className="text-5xl font-black mb-4">Receta Aleatoria</h1>
      <p className="text-gray-600 mb-8">
        ¿No sabes qué cocinar hoy? Descubre una receta sorpresa del mundo.
      </p>

      {/* Botón */}
      <button
        onClick={obtenerRecetaAleatoria}
        className="bg-red-500 text-white px-8 py-4 font-bold hover:bg-red-600 transition-colors mb-12"
      >
        {cargando ? 'Buscando receta...' : '🎲 Sorpréndeme'}
      </button>

      {/* Resultado */}
      {receta && (
        <div>
          {/* Info principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="bg-teal-500 text-white text-xs px-3 py-1">{receta.strCategory}</span>
                <span className="bg-yellow-400 text-black text-xs px-3 py-1">{receta.strArea}</span>
              </div>
              <h2 className="text-4xl font-black mb-6">{receta.strMeal}</h2>

              {/* Ingredientes */}
              <h3 className="font-black text-lg mb-4 border-b border-gray-300 pb-2">Ingredientes</h3>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {ingredientes.map((ing, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 inline-block flex-shrink-0"></span>
                    {ing}
                  </li>
                ))}
              </ul>

              {/* Botón ver detalle */}
              <button
                onClick={() => navigate(`/detalle/${receta.idMeal}`)}
                className="border border-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-colors"
              >
                Ver receta completa →
              </button>
            </div>

            <div>
              <img
                src={receta.strMealThumb}
                alt={receta.strMeal}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Video */}
          {receta.strYoutube && (
            <div className="border-t border-gray-200 pt-8">
              <h3 className="font-black text-lg mb-6">Video de la receta</h3>
              <iframe
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${receta.strYoutube.split('v=')[1]}`}
                title={receta.strMeal}
                allowFullScreen
                className="border-0 w-full md:w-auto"
              ></iframe>
            </div>
          )}

          {/* Botón volver a sorprender */}
          <div className="mt-12 text-center">
            <button
              onClick={obtenerRecetaAleatoria}
              className="bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors"
            >
              🎲 Otra receta aleatoria
            </button>
          </div>
        </div>
      )}

    </main>
  )
}

export default Aleatoria