function InfoAPI() {
  const endpoints = [
    {
      metodo: 'GET',
      ruta: '/search.php?s={name}',
      descripcion: 'Busca recetas por nombre. Devuelve lista de coincidencias con todos los campos.',
      param: 's = nombre de la receta (string)'
    },
    {
      metodo: 'GET',
      ruta: '/lookup.php?i={id}',
      descripcion: 'Obtiene el detalle completo de una receta por su ID única.',
      param: 'i = ID de la receta (number)'
    },
    {
      metodo: 'GET',
      ruta: '/filter.php?c={category}',
      descripcion: 'Filtra recetas por categoría culinaria (Chicken, Seafood, Dessert...).',
      param: 'c = nombre de la categoría'
    },
    {
      metodo: 'GET',
      ruta: '/filter.php?a={area}',
      descripcion: 'Filtra recetas por país o área geográfica (Italian, Japanese, Mexican...).',
      param: 'a = nombre del área'
    },
    {
      metodo: 'GET',
      ruta: '/filter.php?i={ingredient}',
      descripcion: 'Lista todas las recetas que contienen un ingrediente específico.',
      param: 'i = nombre del ingrediente'
    },
    {
      metodo: 'GET',
      ruta: '/categories.php',
      descripcion: 'Devuelve todas las categorías disponibles con ID, nombre y descripción.',
      param: null
    },
    {
      metodo: 'GET',
      ruta: '/list.php?a=list',
      descripcion: 'Lista todas las áreas o países disponibles en la base de datos.',
      param: null
    },
    {
      metodo: 'GET',
      ruta: '/random.php',
      descripcion: 'Devuelve una receta aleatoria completa. Útil para la función de descubrimiento.',
      param: null
    },
  ]

  return (
    <main className="bg-[#FAF7F2] min-h-screen px-4 md:px-16 py-12">

      {/* Encabezado */}
      <h1 className="text-6xl font-black mb-2">
        The <br />
        <span className="text-red-500">Korü</span>
      </h1>
      <p className="text-gray-600 max-w-2xl mb-12">
        Korü es una base de datos abierta de recetas del mundo, mantenida por la comunidad 
        y accesible gratuitamente a través de su API REST pública. Korü consume y enriquece 
        estos datos para ofrecer una experiencia más completa en español.
      </p>

      {/* Cards informativas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-300 mb-16">
        <div className="p-8 border-b md:border-b-0 md:border-r border-gray-300">
          <div className="w-1 h-6 bg-red-500 mb-4"></div>
          <h2 className="font-black text-lg mb-2">¿Qué es Korü?</h2>
          <p className="text-gray-600 text-sm">
            Una enciclopedia culinaria colaborativa con miles de recetas de todo el mundo. 
            Incluye ingredientes, instrucciones paso a paso, imágenes y links a videos de YouTube.
          </p>
        </div>
        <div className="p-8 border-b md:border-b-0 border-gray-300">
          <div className="w-1 h-6 bg-yellow-400 mb-4"></div>
          <h2 className="font-black text-lg mb-2">Acceso libre y gratuito</h2>
          <p className="text-gray-600 text-sm">
            La API pública (v1) es completamente gratuita y no requiere registro. 
            Soporta consultas por nombre, categoría, ingrediente, área geográfica e ID.
          </p>
        </div>
        <div className="p-8 md:border-r border-gray-300">
          <div className="w-1 h-6 bg-teal-500 mb-4"></div>
          <h2 className="font-black text-lg mb-2">Cobertura global</h2>
          <p className="text-gray-600 text-sm">
            Más de 300 categorías y 100+ áreas geográficas. Desde comida italiana 
            hasta cocina etíope, con datos estructurados y normalizados para cada platillo.
          </p>
        </div>
        <div className="p-8">
          <div className="w-1 h-6 bg-orange-400 mb-4"></div>
          <h2 className="font-black text-lg mb-2">Base URL pública</h2>
          <p className="text-gray-600 text-sm mb-2">
            <code className="bg-gray-100 px-2 py-1 text-sm">
              https://www.themealdb.com/api/json/v1/1/
            </code>
          </p>
          <p className="text-gray-600 text-sm">
            Todas las consultas se realizan con GET sobre esta URL base sin autenticación.
          </p>
        </div>
      </div>

      {/* Endpoints */}
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Endpoints disponibles</p>
        <div className="border border-gray-300">
          {endpoints.map((ep, i) => (
            <div key={i} className="flex gap-4 p-6 border-b border-gray-200 last:border-b-0">
              <span className="bg-teal-500 text-white text-xs px-2 py-1 h-fit font-bold">
                {ep.metodo}
              </span>
              <div>
                <p className="font-mono font-bold mb-1">{ep.ruta}</p>
                <p className="text-gray-600 text-sm mb-2">{ep.descripcion}</p>
                {ep.param && (
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 font-mono">
                    {ep.param}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ejemplo JSON */}
      <div className="mt-16">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Ejemplo de respuesta JSON</p>
        <div className="bg-gray-900 text-green-400 p-8 font-mono text-sm overflow-x-auto">
          <pre>{`{
  "meals": [
    {
      "idMeal": "52772",
      "strMeal": "Spaghetti Carbonara",
      "strCategory": "Pasta",
      "strArea": "Italian",
      "strMealThumb": "https://www.themealdb.com/images/...",
      "strYoutube": "https://www.youtube.com/watch?v=...",
      "strIngredient1": "Spaghetti",
      "strIngredient2": "Egg Yolks",
      "strIngredient3": "Parmesan",
      "strMeasure1": "320g",
      "strMeasure2": "6",
      "strMeasure3": "50g"
    }
  ]
}`}</pre>
        </div>
      </div>

    </main>
  )
}

export default InfoAPI