export function GallerySection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container mx-auto">
        <h2
          className="text-6xl md:text-7xl font-bold text-center mb-12"
          style={{ color: "#004eb4" }}
        >
          Galería de Fotos
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 grid-rows-8 gap-4 h-[600px]">
            {/* Large featured image */}
            <div className="col-span-6 row-span-4 overflow-hidden rounded-lg shadow-lg transform rotate-1">
              <img
                src="/festival-community-celebration-with-families-and-c.jpg"
                alt="Celebración familiar del festival"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Medium images */}
            <div className="col-span-3 row-span-3 overflow-hidden rounded-lg shadow-md transform -rotate-2">
              <img
                src="/catholic-choir-singing.jpg"
                alt="Coro católico cantando"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="col-span-3 row-span-2 overflow-hidden rounded-lg shadow-md transform rotate-3">
              <img
                src="/young-christian-band.jpg"
                alt="Banda cristiana joven"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Small images scattered */}
            <div className="col-span-2 row-span-2 overflow-hidden rounded-lg shadow-sm transform -rotate-1">
              <img
                src="/mariachi-band-performing.jpg"
                alt="Mariachi actuando"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="col-span-4 row-span-2 overflow-hidden rounded-lg shadow-md transform rotate-1">
              <img
                src="/contemporary-christian-worship-band.jpg"
                alt="Banda de adoración contemporánea"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="col-span-3 row-span-3 overflow-hidden rounded-lg shadow-lg transform -rotate-2">
              <img
                src="/children-choir-singing.jpg"
                alt="Coro infantil"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="col-span-3 row-span-2 overflow-hidden rounded-lg shadow-md transform rotate-2">
              <img
                src="/classical-sacred-music-ensemble.jpg"
                alt="Ensamble de música sacra"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="col-span-2 row-span-3 overflow-hidden rounded-lg shadow-sm transform -rotate-3">
              <img
                src="/youth-christian-pop-band.jpg"
                alt="Banda pop cristiana juvenil"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="col-span-4 row-span-2 overflow-hidden rounded-lg shadow-md transform rotate-1">
              <img
                src="/family-christian-music-group.jpg"
                alt="Grupo musical familiar"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-8">
          Revive los mejores momentos de nuestras ediciones anteriores y únete a crear nuevos recuerdos
        </p>
      </div>
    </section>
  )
}
