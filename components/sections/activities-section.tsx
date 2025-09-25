import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Music,
  Trophy,
  Users,
  Heart,
  Star,
  Church,
  Baby,
  Utensils,
} from "lucide-react"

export function ActivitiesSection() {
  return (
    <section
      id="itinerario"
      className="py-16 px-4"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-cWpF5aRUQatvlCkHl2Oi4f8qrWH0LF.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <h2
          className="text-6xl md:text-7xl font-bold text-center mb-12"
          style={{ color: "#ffd336" }}
        >
          Actividades del Festival
        </h2>

        <div className="mb-16">
          <h3
            className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-2 text-white"
          >
            <Music className="w-8 h-8" />
            Grupos Musicales Católicos
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                nombre: "Coro Esperanza",
                descripcion: "Música litúrgica contemporánea que eleva el espíritu",
                horario: "11:00 AM - 12:00 PM",
                imagen: "/catholic-choir-singing.jpg",
              },
              {
                nombre: "Banda Joven Fe",
                descripcion: "Rock cristiano para todas las edades",
                horario: "2:00 PM - 3:00 PM",
                imagen: "/young-christian-band.jpg",
              },
              {
                nombre: "Mariachi Guadalupe",
                descripcion: "Música tradicional mexicana con mensaje de fe",
                horario: "6:00 PM - 7:00 PM",
                imagen: "/mariachi-band-performing.jpg",
              },
              {
                nombre: "Grupo Renacer",
                descripcion: "Alabanzas contemporáneas llenas de esperanza",
                horario: "1:00 PM - 2:00 PM",
                imagen: "/contemporary-christian-worship-band.jpg",
              },
              {
                nombre: "Coro Infantil Luz",
                descripcion: "Voces angelicales de nuestros niños",
                horario: "12:30 PM - 1:00 PM",
                imagen: "/children-choir-singing.jpg",
              },
            ].map((grupo, index) => (
              <Card key={index} className="overflow-hidden shadow-lg">
                <img
                  src={grupo.imagen || "/placeholder.svg"}
                  alt={grupo.nombre}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle style={{ color: "#004eb4" }}>{grupo.nombre}</CardTitle>
                  <CardDescription>{grupo.descripcion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 text-white"
                    style={{ backgroundColor: "#2cbe6d" }}
                  >
                    <Clock className="w-4 h-4" />
                    {grupo.horario}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3
            className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-2 text-white"
          >
            <Trophy className="w-8 h-8" />
            Torneos Deportivos
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                deporte: "Fut 7 varonil",
                descripcion: "Torneo de fútbol 7 categoría varonil",
                horario: "10:00 AM - 4:00 PM",
                inscripcion: "Inscripción gratuita en el lugar",
              },
              {
                deporte: "Voleibol femenil",
                descripcion: "Competencia de voleibol categoría femenil",
                horario: "12:00 PM - 6:00 PM",
                inscripcion: "Equipos femeniles bienvenidos",
              },
            ].map((torneo, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2" style={{ color: "#004eb4" }}>
                    <Trophy className="w-5 h-5" />
                    {torneo.deporte}
                  </CardTitle>
                  <CardDescription>{torneo.descripcion}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-500" />
                    {torneo.horario}
                  </div>
                  <p className="text-sm text-gray-600">{torneo.inscripcion}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-2 text-white hover:opacity-90 bg-transparent"
                    style={{ backgroundColor: "#004eb4", borderColor: "#004eb4" }}
                  >
                    Inscribirse
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3
            className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-2 text-white"
          >
            <Users className="w-8 h-8" />
            Kermés
          </h3>
          <Card className="shadow-lg bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle style={{ color: "#004eb4" }}>Kermés Familiar</CardTitle>
              <CardDescription>Juegos tradicionales, rifas y diversión para toda la familia</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Actividades:</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Lotería tradicional</li>
                  <li>• Juegos mecánicos</li>
                  <li>• Puestos de comida</li>
                  <li>• Rifas benéficas</li>
                </ul>
              </div>
              <Badge variant="secondary" className="text-white" style={{ backgroundColor: "#2cbe6d" }}>
                Todo el día: 10:00 AM - 10:00 PM
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3
            className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-2 text-white"
          >
            <Utensils className="w-8 h-8" />
            Torneo de Parrilleros
          </h3>
          <Card className="shadow-lg bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle style={{ color: "#004eb4" }}>Parrilleros de la Esperanza</CardTitle>
              <CardDescription>Competencia culinaria con los mejores asadores de la comunidad</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Detalles:</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Inscripción: $50 por equipo</li>
                  <li>• Premios en efectivo</li>
                  <li>• Degustación gratuita</li>
                  <li>• Jurado especializado</li>
                </ul>
              </div>
              <Badge variant="secondary" className="text-white" style={{ backgroundColor: "#2cbe6d" }}>
                4:00 PM - 8:00 PM
              </Badge>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-2 text-white hover:opacity-90 bg-transparent"
                style={{ backgroundColor: "#004eb4", borderColor: "#004eb4" }}
              >
                Inscribir Equipo
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3
            className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-2 text-white"
          >
            <Star className="w-8 h-8" />
            Elementos del Año Jubilar
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                titulo: "Misa",
                descripcion: "Misa solemne de apertura del festival",
                horario: "10:30 AM",
                icono: Church,
                imagen: "/catholic-mass-celebration.jpg",
              },
              {
                titulo: "Adoración Eucarística",
                descripcion: "Momento de oración y contemplación",
                horario: "3:00 PM",
                icono: Heart,
                imagen: "/eucharistic-adoration.jpg",
              },
              {
                titulo: "Actividades para Niños",
                descripcion: "Catequesis lúdica y juegos espirituales",
                horario: "2:00 PM",
                icono: Baby,
                imagen: "/children-religious-activities.jpg",
              },
              {
                titulo: "Confesiones",
                descripcion: "Sacramento de la reconciliación disponible",
                horario: "Todo el día",
                icono: Star,
                imagen: "/confession-booth-catholic.jpg",
              },
            ].map((actividad, index) => (
              <Card key={index} className="overflow-hidden shadow-lg border-2" style={{ borderColor: "#fd9903/30" }}>
                <img
                  src={actividad.imagen || "/placeholder.svg"}
                  alt={actividad.titulo}
                  className="w-full h-40 object-cover"
                />
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 p-3 rounded-full w-fit" style={{ backgroundColor: "#fd9903/20" }}>
                    <actividad.icono className="w-6 h-6" style={{ color: "#fd9903" }} />
                  </div>
                  <CardTitle className="text-lg" style={{ color: "#004eb4" }}>
                    {actividad.titulo}
                  </CardTitle>
                  <CardDescription>{actividad.descripcion}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge className="text-white" style={{ backgroundColor: "#2cbe6d" }}>
                    {actividad.horario}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
