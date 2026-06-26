import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Detalle() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [receta, setReceta] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    // URL actualizada a themealdb.com
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => {
        setReceta(data.meals[0])
        setCargando(false)
      })
  }, [id])

  if (cargando) return <p className="text-center p-16">Cargando receta...</p>

  // Extraer ingredientes
  const ingredientes = []
  for (let i = 1; i <= 20; i++) {
    const ingrediente = receta[`strIngredient${i}`]
    const medida = receta[`strMeasure${i}`]
    if (ingrediente && ingrediente.trim()) {
      ingredientes.push(`${medida} ${ingrediente}`.trim())
    }
  }

  return (
    <main className="bg-[#FAF7F2] min-h-screen">

      {/* Botón volver */}
      <div className="px-16 pt-8">
        <button
          onClick={() => navigate('/listado')}
          className="text-sm font-bold hover:underline"
        >
          ← Volver al Listado
        </button>
      </div>

      {/* Hero de la receta */}
      <section className="px-16 py-8 grid grid-cols-2 gap-12">
        <div>
          <span className="bg-teal-500 text-white text-xs px-3 py-1 mb-4 inline-block">
            {receta.strCategory}
          </span>
          <h1 className="text-5xl font-black mb-4">{receta.strMeal}</h1>
          <p className="text-gray-500 mb-2">
            <span className="font-bold">Origen:</span> {receta.strArea}
          </p>

          {/* Ingredientes */}
          <div className="mt-6">
            <h2 className="text-xl font-black mb-4 border-b border-gray-300 pb-2">Ingredientes</h2>
            <ul className="grid grid-cols-2 gap-2">
              {ingredientes.map((ing, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 inline-block"></span>
                  {ing}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <img
            src={receta.strMealThumb}
            alt={receta.strMeal}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Instrucciones */}
      <section className="px-16 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-black mb-6">Instrucciones</h2>
        <div className="max-w-3xl">
          {receta.strInstructions.split('\n').filter(p => p.trim()).map((parrafo, i) => (
            <p key={i} className="text-gray-700 mb-4 leading-relaxed">{parrafo}</p>
          ))}
        </div>
      </section>

      {/* Video */}
      {receta.strYoutube && (
        <section className="px-16 py-8 border-t border-gray-200">
          <h2 className="text-2xl font-black mb-6">Video</h2>
          <iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${receta.strYoutube.split('v=')[1]}`}
            title={receta.strMeal}
            allowFullScreen
            className="border-0"
          ></iframe>
        </section>
      )}

    </main>
  )
}

export default Detalle