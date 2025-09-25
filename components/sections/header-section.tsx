import { Instagram } from "lucide-react"

export function HeaderSection() {
  return (
    <header className="bg-white shadow-sm border-b-2" style={{ borderColor: "#fd9903" }}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%201%20%281%29-ZkXZOH0PQIBj6pd6lnjtGMf2EOIvr3.png"
            alt="Festival de la Esperanza Logo"
            className="h-12 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#sobre-nosotros"
            className="font-semibold hover:text-orange-500 transition-colors"
            style={{ color: "#004eb4" }}
          >
            Sobre Nosotros
          </a>
          <a
            href="#itinerario"
            className="font-semibold hover:text-orange-500 transition-colors"
            style={{ color: "#004eb4" }}
          >
            Itinerario
          </a>
          <a
            href="#boletos"
            className="font-semibold hover:text-orange-500 transition-colors"
            style={{ color: "#004eb4" }}
          >
            Boletos
          </a>
          <a
            href="https://instagram.com/festivaldelaesperanzamty"
            className="flex items-center gap-1 hover:text-orange-500 transition-colors"
            style={{ color: "#004eb4" }}
          >
            <Instagram className="w-5 h-5" />
          </a>
        </nav>
      </div>
    </header>
  )
}
