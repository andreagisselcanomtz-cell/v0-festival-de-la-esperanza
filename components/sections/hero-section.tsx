"use client"

import { CountdownTimer } from "@/components/countdown-timer"

interface HeroSectionProps {
  festivalDate: Date
}

export function HeroSection({ festivalDate }: HeroSectionProps) {
  return (
    <section
      className="relative py-20 px-4 min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-7eEefVAb1HMgURExr97M7AXSvd2jiR.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto text-center">
        <div className="mb-12">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%204%20%281%29-eqEoB3ztjsU86Fg8vv8pWkpB1BcWlC.png"
            alt="Festival de la Esperanza Logo"
            className="mx-auto max-w-2xl w-full h-auto mb-8"
          />
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-2xl max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">¡Únete a la Celebración!</h2>
            <p className="text-xl mt-2">Reavivando la Esperanza de la Sociedad</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Fecha */}
            <div className="text-center">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-black mb-3" style={{ color: "#004eb4" }}>
                  FECHA
                </h3>
                <div className="text-lg font-bold" style={{ color: "#004eb4" }}>
                  22 Noviembre
                </div>
                <div className="text-lg font-bold" style={{ color: "#004eb4" }}>
                  2025
                </div>
              </div>
            </div>

            {/* Lugar */}
            <div className="text-center">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-black mb-3" style={{ color: "#2cbe6d" }}>
                  LUGAR
                </h3>
                <div className="text-sm font-bold" style={{ color: "#2cbe6d" }}>
                  Instituto Mater
                </div>
                <div className="text-sm font-bold" style={{ color: "#2cbe6d" }}>
                  San Pedro Garza García
                </div>
              </div>
            </div>

            {/* Horario */}
            <div className="text-center">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-orange-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-black mb-3" style={{ color: "#fd9903" }}>
                  HORARIO
                </h3>
                <div className="text-sm font-bold" style={{ color: "#fd9903" }}>
                  8:00 AM
                </div>
                <div className="text-sm font-bold" style={{ color: "#fd9903" }}>
                  a 9:00 PM
                </div>
              </div>
            </div>

            {/* Precio */}
            <div className="text-center">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-purple-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-black mb-3" style={{ color: "#8b5cf6" }}>
                  PRECIO
                </h3>
                <div className="text-lg font-bold" style={{ color: "#8b5cf6" }}>
                  $200
                </div>
                <div className="text-lg font-bold" style={{ color: "#8b5cf6" }}>
                  Menores gratis
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <CountdownTimer targetDate={festivalDate} />
          </div>
        </div>
      </div>
    </section>
  )
}
