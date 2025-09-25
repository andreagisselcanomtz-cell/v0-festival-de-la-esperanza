import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, BookOpen } from "lucide-react"

export function WorkshopsSection() {
  return (
    <section
      className="py-16 px-4"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-sfPKWdd0OFc7XyZcHbnJJfy68n1pJb.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <h2
          className="text-6xl md:text-7xl font-bold text-center mb-12"
          style={{ color: "#004eb4" }}
        >
          Talleres
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              nombre: "Taller de Oración Familiar",
              facilitador: "Hna. Teresa López",
              horario: "10:00 AM - 11:30 AM",
              lugar: "Capilla San José",
              descripcion: "Aprende técnicas de oración en familia y fortalece los lazos espirituales",
              imagen: "/family-prayer-workshop.jpg",
            },
            {
              nombre: "Taller de Música Litúrgica",
              facilitador: "Mtro. Juan Carlos Vega",
              horario: "3:00 PM - 4:30 PM",
              lugar: "Sala de Música",
              descripcion: "Descubre cómo la música puede elevar tu experiencia de fe",
              imagen: "/liturgical-music-workshop.jpg",
            },
          ].map((taller, index) => (
            <Card key={index} className="overflow-hidden shadow-lg bg-white/95 backdrop-blur-sm">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle style={{ color: "#004eb4" }}>{taller.nombre}</CardTitle>
                <CardDescription>Facilitado por: {taller.facilitador}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">{taller.descripcion}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-500" />
                  {taller.horario}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  {taller.lugar}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-2 text-white hover:opacity-90 bg-transparent"
                  style={{ backgroundColor: "#ffd336", borderColor: "#ffd336", color: "#004eb4" }}
                >
                  Inscribirse al Taller
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
