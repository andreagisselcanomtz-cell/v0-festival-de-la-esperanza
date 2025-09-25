import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Mic } from "lucide-react"

export function TalksSection() {
  return (
    <section
      className="py-16 px-4"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copia%20de%20FESTIVAL%20DE%20LA%20ESPERANZA_PPT-grGtkCwnQQuv8pHBI8Zv3Fuoael7FG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <h2
          className="text-6xl md:text-7xl font-bold text-center mb-12 text-white"
        >
          Charlas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              nombre: "La Esperanza en Tiempos Difíciles",
              charlista: "P. Miguel Rodríguez",
              horario: "11:00 AM - 12:00 PM",
              lugar: "Auditorio Principal",
              imagen: "/speaker-hope-talk.jpg",
            },
            {
              nombre: "Familia y Fe en el Siglo XXI",
              charlista: "Dra. María González",
              horario: "2:00 PM - 3:00 PM",
              lugar: "Sala de Conferencias",
              imagen: "/family-faith-speaker.jpg",
            },
            {
              nombre: "Juventud y Valores Cristianos",
              charlista: "Lic. Carlos Mendoza",
              horario: "4:00 PM - 5:00 PM",
              lugar: "Aula Magna",
              imagen: "/youth-values-speaker.jpg",
            },
          ].map((charla, index) => (
            <Card key={index} className="overflow-hidden shadow-lg bg-white/95 backdrop-blur-sm">
              <div className="h-32 bg-gray-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                  <Mic className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle style={{ color: "#004eb4" }}>{charla.nombre}</CardTitle>
                <CardDescription>Por: {charla.charlista}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-500" />
                  {charla.horario}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  {charla.lugar}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
