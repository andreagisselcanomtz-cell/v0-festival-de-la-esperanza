import { Heart, Instagram } from "lucide-react"

export function BeneficiarySection() {
  return (
    <section className="py-12 px-4 text-white" style={{ backgroundColor: "#004eb4" }}>
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Heart className="w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Evento a Beneficio de:
          </h2>
          <Heart className="w-8 h-8" />
        </div>
        <div className="mb-6">
          <img src="/superacion-juvenil-logo.png" alt="Superación Juvenil ABP Logo" className="h-16 mx-auto mb-4" />
          <div className="text-3xl font-bold">Superación Juvenil ABP</div>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">EXPERIENCIA EN EVENTOS</h3>
              <p className="text-sm leading-relaxed">
                Los eventos de alto impacto han sido elementales para ayudar a sostener económicamente a la
                asociación. Haciendo Eventos como: Conferencias, Cine con causa, Cenas de gala, Carreras, etc.
              </p>
              <p className="text-sm leading-relaxed mt-3">
                Durante 14 años fuimos los creadores y organizadores de la carrera Vivamus "Por una sociedad con
                valores". Teniendo entre 4,000 y 8,000 corredores por edición.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">EVENTO CON CAUSA</h3>
              <p className="text-sm leading-relaxed">
                El Festival de la Esperanza es un evento con causa, cuyo propósito principal es apoyar los esfuerzos
                de Superación Juvenil A.B.P.
              </p>
              <p className="text-sm leading-relaxed mt-3">
                Además, esta iniciativa también busca beneficiar económicamente a otros movimientos que quieran
                participar como aliados del Festival.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <a
            href="https://instagram.com/festivaldelaesperanzamty"
            className="flex items-center gap-2 text-lg hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-6 h-6" />
            @festivaldelaesperanzamty
          </a>
        </div>
      </div>
    </section>
  )
}
