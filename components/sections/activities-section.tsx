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
import activitiesData from "@/data/activities-section.json"

export function ActivitiesSection() {
  const { title, titleColor, backgroundImage, sections } = activitiesData
  return (
    <section
      id="itinerario"
      className="py-16 px-4"
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <h2
          className="text-6xl md:text-7xl font-bold text-center mb-12"
          style={{ color: titleColor }}
        >
          {title}
        </h2>

        <div className="mb-16">
          <h3
            className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-2 text-white"
          >
            <Music className="w-8 h-8" />
            {sections.musicGroups.title}
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {sections.musicGroups.groups.map((grupo, index) => (
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
            {sections.sportsTournaments.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sections.sportsTournaments.tournaments.map((torneo, index) => (
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
            {sections.kermes.title}
          </h3>
          <Card className="shadow-lg bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle style={{ color: "#004eb4" }}>{sections.kermes.cardTitle}</CardTitle>
              <CardDescription>{sections.kermes.cardDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Actividades:</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  {sections.kermes.activities.map((activity, index) => (
                    <li key={index}>• {activity}</li>
                  ))}
                </ul>
              </div>
              <Badge variant="secondary" className="text-white" style={{ backgroundColor: "#2cbe6d" }}>
                {sections.kermes.schedule}
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3
            className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-2 text-white"
          >
            <Utensils className="w-8 h-8" />
            {sections.grillTournament.title}
          </h3>
          <Card className="shadow-lg bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle style={{ color: "#004eb4" }}>{sections.grillTournament.cardTitle}</CardTitle>
              <CardDescription>{sections.grillTournament.cardDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Detalles:</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  {sections.grillTournament.details.map((detail, index) => (
                    <li key={index}>• {detail}</li>
                  ))}
                </ul>
              </div>
              <Badge variant="secondary" className="text-white" style={{ backgroundColor: "#2cbe6d" }}>
                {sections.grillTournament.schedule}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-2 text-white hover:opacity-90 bg-transparent"
                style={{ backgroundColor: "#004eb4", borderColor: "#004eb4" }}
              >
                {sections.grillTournament.buttonText}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3
            className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-2 text-white"
          >
            <Star className="w-8 h-8" />
            {sections.jubileeElements.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.jubileeElements.activities.map((actividad, index) => {
              const IconComponent = actividad.icono === "Church" ? Church : 
                                   actividad.icono === "Heart" ? Heart :
                                   actividad.icono === "Baby" ? Baby : Star
              return (
              <Card key={index} className="overflow-hidden shadow-lg border-2" style={{ borderColor: "#fd9903/30" }}>
                <img
                  src={actividad.imagen || "/placeholder.svg"}
                  alt={actividad.titulo}
                  className="w-full h-40 object-cover"
                />
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 p-3 rounded-full w-fit" style={{ backgroundColor: "#fd9903/20" }}>
                    <IconComponent className="w-6 h-6" style={{ color: "#fd9903" }} />
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
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
