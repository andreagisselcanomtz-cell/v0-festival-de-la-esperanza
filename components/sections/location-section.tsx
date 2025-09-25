import { Button } from "@/components/ui/button"
import { MapPin, Users, Heart } from "lucide-react"

export function LocationSection() {
  return (
    <section
      className="py-16 px-4"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-7eEefVAb1HMgURExr97M7AXSvd2jiR.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <h2
          className="text-6xl md:text-7xl font-bold text-center mb-12"
          style={{ color: "#004eb4" }}
        >
          Lugar del Evento
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold" style={{ color: "#004eb4" }}>
              Instituto Mater
            </h3>
            <p className="text-lg text-gray-700">San Pedro Garza García, Nuevo León</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6" style={{ color: "#2cbe6d" }} />
                <span className="text-gray-700">Fácil acceso y amplio estacionamiento</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" style={{ color: "#2cbe6d" }} />
                <span className="text-gray-700">Instalaciones familiares y seguras</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6" style={{ color: "#2cbe6d" }} />
                <span className="text-gray-700">Ambiente acogedor para toda la familia</span>
              </div>
            </div>
            <Button
              className="text-white hover:opacity-90"
              style={{ backgroundColor: "#004eb4" }}
              onClick={() => window.open("https://share.google/O4omxbjnmPB2DfsAF", "_blank")}
            >
              Ver en Google Maps
            </Button>
          </div>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.5!2d-100.4!3d25.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM5JzAwLjAiTiAxMDDCsDI0JzAwLjAiVw!5e0!3m2!1sen!2smx!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Instituto Mater Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
