export function AboutSection() {
  return (
    <section
      id="sobre-nosotros"
      className="py-16 px-4 relative"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copia%20de%20FESTIVAL%20DE%20LA%20ESPERANZA_PPT-grGtkCwnQQuv8pHBI8Zv3Fuoael7FG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto relative z-10">
        <h2
          className="text-6xl md:text-7xl font-bold text-center mb-12 text-white"
        >
          ¿QUÉ ES?
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6" style={{ color: "#004eb4" }}>
                  Fiesta familiar que busca generar Esperanza mediante:
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-xl font-semibold mb-6" style={{ color: "#004eb4" }}>
                  <div>la cultura</div>
                  <div>el deporte</div>
                  <div>y la fe</div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  El Festival de la Esperanza es un evento con causa, cuyo propósito principal es apoyar los esfuerzos
                  de Superación Juvenil A.B.P. Además, esta iniciativa también busca beneficiar económicamente a otros
                  movimientos que quieran participar como aliados del Festival.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-80 rounded-xl overflow-hidden border-4 border-orange-400 shadow-lg bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-orange-400 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-semibold">Video del Festival</p>
                    <p className="text-sm text-gray-500 mt-2">Próximamente disponible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
