function DevTeam() {
  const equipo = [
    {
      nombre: "Tomás Tapia",
      rol: "UI/UX Designer & Frontend Developer",
      descripcion: "Encargado del diseño en Figma y desarrollo de la interfaz de usuario. Responsable de la experiencia visual y el diseño responsive del sitio.",
      iniciales: "TT",
      color: "bg-red-500"
    },
    {
      nombre: "Joel Collao",
      rol: "API Integration & Project Manager",
      descripcion: "Encargado de la integración con MealDB API, manejo de datos y gestión del proyecto. Responsable del flujo de datos y la coordinación del equipo.",
      iniciales: "JC",
      color: "bg-yellow-400"
    }
  ]

  return (
    <main className="bg-[#FAF7F2] min-h-screen px-4 md:px-16 py-12">

      {/* Encabezado */}
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Quiénes somos</p>
      <h1 className="text-5xl font-black mb-4">El Equipo</h1>
      <p className="text-gray-600 max-w-xl mb-12">
        Somos estudiantes de Ingeniería Informática de la Universidad de Valparaíso, 
        unidos por el desafío de construir una experiencia web moderna consumiendo APIs reales.
      </p>

      {/* Banner misión */}
      <div className="bg-black text-white p-10 mb-12 relative overflow-hidden">
        <p className="text-xs text-yellow-400 uppercase tracking-widest mb-4">Nuestra misión</p>
        <p className="text-2xl md:text-3xl font-black max-w-3xl">
          "Cada receta es una ventana a una cultura. Documentarlas no es solo preservar ingredientes — es preservar identidades."
        </p>
      </div>

      {/* Cards del equipo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {equipo.map((persona, i) => (
          <div key={i} className="border border-gray-300 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className={`${persona.color} w-16 h-16 flex items-center justify-center text-xl font-black`}>
                {persona.iniciales}
              </div>
              <div>
                <h2 className="font-black text-xl">{persona.nombre}</h2>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{persona.rol}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{persona.descripcion}</p>
          </div>
        ))}
      </div>

      {/* Stats del equipo */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-300">
        <div className="p-8 border-r border-gray-300 text-center">
          <p className="text-4xl font-black">2</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Integrantes</p>
        </div>
        <div className="p-8 border-r border-gray-300 text-center">
          <p className="text-4xl font-black">6</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Páginas</p>
        </div>
        <div className="p-8 border-r border-gray-300 text-center">
          <p className="text-4xl font-black">1</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">API integrada</p>
        </div>
        <div className="p-8 text-center">
          <p className="text-4xl font-black">2026</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Año</p>
        </div>
      </div>

      {/* Contacto */}
      <div className="border border-gray-300 p-8 mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-black text-lg">¿Quieres colaborar?</p>
          <p className="text-gray-500 text-sm">Proyecto académico — Universidad de Valparaíso, 2026</p>
        </div>
        <a 
          href="https://github.com/jozxgod/pagina-web"
          target="_blank"
          className="border border-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-colors flex items-center gap-2"
        >
          ⌥ GitHub
        </a>
      </div>

    </main>
  )
}

export default DevTeam