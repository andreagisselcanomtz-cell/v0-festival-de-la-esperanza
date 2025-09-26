import { Instagram } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="py-12 px-4" style={{ backgroundColor: "#00407d", color: "#ffffff" }}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#ffd336" }}>
              Festival de la Esperanza
            </h3>
            <p className="text-gray-300">
              Celebrando la fe, la familia y la comunidad en un ambiente de alegría y esperanza, a favor de {' '}
            <a
              href="https://superacionjuvenil.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Superación Juvenil A.B.P.
            </a>
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#ffd336" }}>
              Redes Sociales
            </h4>
            <div className="space-y-2">
              <a
                href="https://instagram.com/festivaldelaesperanzamty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @festivaldelaesperanzamty
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Festival de la Esperanza. Todos los derechos reservados.</p>
          <p className="mt-2">Organizado con amor para nuestra comunidad</p>
        </div>
      </div>
    </footer>
  )
}
