function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-gray-900 text-white min-h-[90vh] flex items-center px-16 py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>

        <div className="max-w-xl">
          {/* Badge */}
          <span className="bg-teal-500 text-white text-xs px-3 py-1 mb-6 inline-block">
            ● BASE DE DATOS ABIERTA · OPEN SOURCE
          </span>

          {/* Título */}
          <h1 className="text-7xl font-black leading-none mb-6">
            LA COCINA <br />
            <span className="text-yellow-400">DEL</span> <br />
            MUNDO.
          </h1>

          {/* Subtítulo */}
          <p className="text-gray-300 mb-8 text-lg max-w-md">
            Una base de datos colaborativa con recetas auténticas de todas las culturas — ingredientes, técnicas, videos y nutrición de más de 190 países.
          </p>

          {/* Botones */}
          <div className="flex gap-4 mb-12">
            <button className="bg-red-500 text-white px-6 py-3 font-bold hover:bg-red-600 transition-colors">
              Explorar recetas ↗
            </button>
            <button className="border border-white text-white px-6 py-3 font-bold hover:bg-white hover:text-black transition-colors">
              Info de la API
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 bg-black bg-opacity-50 px-6 py-4 inline-flex">
            <div>
              <p className="font-black text-xl">12,400+</p>
              <p className="text-gray-400 text-xs">RECETAS</p>
            </div>
            <div>
              <p className="font-black text-xl">190</p>
              <p className="text-gray-400 text-xs">PAÍSES</p>
            </div>
            <div>
              <p className="font-black text-xl">840+</p>
              <p className="text-gray-400 text-xs">INGREDIENTES</p>
            </div>
            <div>
              <p className="font-black text-xl">5,200+</p>
              <p className="text-gray-400 text-xs">VIDEOS</p>
            </div>
          </div>
        </div>
      </section>
      {/* COCINAS DEL MUNDO */}
      <section className="px-16 py-16 bg-[#FAF7F2]">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Navegar por región</p>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-black">Cocinas del Mundo</h2>
          <a href="/listado" className="text-sm font-bold hover:underline">Ver todas &gt;</a>
        </div>

        <div className="grid grid-cols-6 gap-0">
          <div className="bg-red-500 p-6 text-white cursor-pointer hover:opacity-90 transition-opacity">
            <p className="text-2xl mb-2">🍜</p>
            <p className="font-bold">Asia</p>
            <p className="text-xs opacity-80">3241 recetas</p>
          </div>
          <div className="bg-yellow-400 p-6 text-black cursor-pointer hover:opacity-90 transition-opacity">
            <p className="text-2xl mb-2">🥐</p>
            <p className="font-bold">Europa</p>
            <p className="text-xs opacity-80">2167 recetas</p>
          </div>
          <div className="bg-teal-500 p-6 text-white cursor-pointer hover:opacity-90 transition-opacity">
            <p className="text-2xl mb-2">🌮</p>
            <p className="font-bold">América</p>
            <p className="text-xs opacity-80">1893 recetas</p>
          </div>
          <div className="bg-orange-400 p-6 text-white cursor-pointer hover:opacity-90 transition-opacity">
            <p className="text-2xl mb-2">🌍</p>
            <p className="font-bold">África</p>
            <p className="text-xs opacity-80">876 recetas</p>
          </div>
          <div className="bg-black p-6 text-white cursor-pointer hover:opacity-90 transition-opacity">
            <p className="text-2xl mb-2">🫒</p>
            <p className="font-bold">Medio Oriente</p>
            <p className="text-xs opacity-80">654 recetas</p>
          </div>
          <div className="bg-teal-100 p-6 text-black cursor-pointer hover:opacity-90 transition-opacity">
            <p className="text-2xl mb-2">🦞</p>
            <p className="font-bold">Oceanía</p>
            <p className="text-xs opacity-80">312 recetas</p>
          </div>
        </div>
      </section>
      {/* PLATILLOS DESTACADOS */}
      <section className="px-16 py-16 bg-[#FAF7F2]">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Selección editorial</p>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-black">Platillos Destacados</h2>
          <a href="/listado" className="text-sm font-bold hover:underline">Ver todos &gt;</a>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            { nombre: "Pad Thai", origen: "Bangkok, Tailandia", categoria: "Asia", tiempo: "25 min", porciones: "2 p.", dificultad: "FÁCIL", color: "bg-green-500", img: "https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg" },
            { nombre: "Spaghetti Carbonara", origen: "Roma, Italia", categoria: "Europa", tiempo: "20 min", porciones: "4 p.", dificultad: "MEDIO", color: "bg-yellow-400", img: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg" },
            { nombre: "Tacos al Pastor", origen: "Ciudad de México, México", categoria: "América", tiempo: "45 min", porciones: "6 p.", dificultad: "MEDIO", color: "bg-yellow-400", img: "https://www.themealdb.com/images/media/meals/OnkIw01699270487.jpg" },
            { nombre: "Tagine de Pollo", origen: "Marrakech, Marruecos", categoria: "África", tiempo: "70 min", porciones: "4 p.", dificultad: "FÁCIL", color: "bg-green-500", img: "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg" },
          ].map((receta, i) => (
            <div key={i} className="cursor-pointer group">
              <div className="relative overflow-hidden">
                <img 
                  src={receta.img} 
                  alt={receta.nombre}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">{receta.categoria}</span>
                <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1">★ DESTACADO</span>
              </div>
              <div className="pt-3">
                <p className="text-xs text-gray-500 uppercase tracking-widest">{receta.origen}</p>
                <h3 className="font-black text-xl mb-1">{receta.nombre}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-xs text-gray-500">
                    <span>⏱ {receta.tiempo}</span>
                    <span>👥 {receta.porciones}</span>
                  </div>
                  <span className={`${receta.color} text-xs px-2 py-1 font-bold`}>{receta.dificultad}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* BANNER CTA */}
      <section className="bg-black text-white px-16 py-20 flex justify-between items-center">
        <div>
          <h2 className="text-5xl font-black mb-4">
            ¿CONOCES UNA <br />
            <span className="text-yellow-400">RECETA</span> QUE FALTA?
          </h2>
          <p className="text-gray-400 max-w-md">
            MUNDI es un proyecto colaborativo. Añade recetas, corrige ingredientes y sube fotos.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <button className="bg-red-500 text-white px-8 py-4 font-bold hover:bg-red-600 transition-colors">
            Comenzar a contribuir →
          </button>
          <button className="border border-white text-white px-8 py-4 font-bold hover:bg-white hover:text-black transition-colors">
            Explorar la API
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#FAF7F2] border-t border-gray-200 px-16 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-black">MUNDI</span>
          <span className="text-gray-500 text-sm">Base de datos global de recetas · Código abierto</span>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:underline">Inicio</a>
          <a href="/listado" className="hover:underline">Recetas</a>
          <a href="/info-api" className="hover:underline">API</a>
          <a href="/dev-team" className="hover:underline">Equipo</a>
          <a href="/filtrado" className="hover:underline">Filtrado</a>
        </div>
      </footer>
    </main>
  )
}

export default Home