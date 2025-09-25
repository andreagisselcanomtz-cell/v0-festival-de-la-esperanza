"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CountdownTimer } from "@/components/countdown-timer"
import { HopeQuote } from "@/components/hope-quote"
import { SectionDivider } from "@/components/section-divider"
import {
  Clock,
  MapPin,
  Music,
  Trophy,
  Users,
  Heart,
  Star,
  Instagram,
  Church,
  Baby,
  Utensils,
  Mic,
  BookOpen,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function FestivalEsperanza() {
  const festivalDate = new Date("2025-11-22T08:00:00")
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = festivalDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [festivalDate])

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
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

      <SectionDivider variant="wave" />

      <div className="py-8 px-4 relative">
        <div className="container mx-auto">
          <HopeQuote
            quote="La esperanza es el sueño del hombre despierto"
            author="Aristóteles"
            className="max-w-md mx-auto"
          />
        </div>
      </div>

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

      <div className="relative">
        <SectionDivider variant="diagonal" />
      </div>

      <div className="py-8 px-4 relative" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container mx-auto">
          <HopeQuote
            quote="Mantén viva la esperanza, porque ella es el oxígeno del alma"
            className="max-w-lg ml-auto mr-16"
          />
        </div>
      </div>

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

      <div className="relative">
        <SectionDivider variant="wave" />
      </div>

      <div className="py-8 px-4 relative">
        <div className="container mx-auto">
          <HopeQuote
            quote="La esperanza es lo último que se pierde, y lo primero que debemos encontrar"
            className="max-w-md mx-auto"
          />
        </div>
      </div>

      <section
        id="boletos"
        className="py-16 px-4"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-sfPKWdd0OFc7XyZcHbnJJfy68n1pJb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto max-w-4xl">
          <h2
            className="text-6xl md:text-7xl font-bold text-center mb-12"
            style={{ color: "#187bcd" }}
          >
            Boletos de Entrada
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-blue-900/20 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Entrada General</CardTitle>
                <CardDescription>Acceso completo a todas las actividades</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-500 mb-4">$200 MXN</div>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Acceso a todos los conciertos</li>
                  <li>• Participación en torneos</li>
                  <li>• Acceso a kermés</li>
                  <li>• Actividades espirituales</li>
                  <li>• Incluye juegos de kermés y más sorpresas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-500/20 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-green-500">Menores de 11 años</CardTitle>
                <CardDescription>¡Los niños entran gratis!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-500 mb-4">GRATIS</div>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Entrada gratuita para menores de 11</li>
                  <li>• Actividades especiales para niños</li>
                  <li>• Área de juegos segura</li>
                  <li>• Acompañante adulto requerido</li>
                  <li>• Invitados especiales para los niños</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Comprar Entradas</CardTitle>
              <CardDescription>Pago seguro con Mercado Pago</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 border-2 border-dashed border-primary/30 rounded-lg p-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Integración de Mercado Pago</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Aquí se integrará el Payment Brick de Mercado Pago usando el SDK @mercadopago/sdk-react
                  </p>
                  <div className="bg-background p-4 rounded border text-left text-sm font-mono">
                    <div className="text-muted-foreground mb-2">// Ejemplo de configuración:</div>
                    <div>preferenceId: "tu-preference-id-aqui"</div>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full text-lg py-6">
                Comprar Entradas Ahora
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Métodos de pago: Tarjetas de crédito/débito, OXXO, transferencias bancarias
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="relative">
        <SectionDivider variant="diagonal" />
      </div>

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

      <div className="relative">
        <SectionDivider variant="wave" />
      </div>

      <div className="py-8 px-4 relative" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container mx-auto">
          <HopeQuote
            quote="Donde hay esperanza, hay vida. Donde hay vida, hay posibilidad"
            className="max-w-lg ml-16"
          />
        </div>
      </div>

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

      <div className="relative">
        <SectionDivider variant="diagonal" />
      </div>

      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <h2
            className="text-6xl md:text-7xl font-bold text-center mb-12"
            style={{ color: "#004eb4" }}
          >
            Mapa del Evento
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <img
                  src="/festival-event-map-layout-with-stages-food-areas-a.jpg"
                  alt="Mapa del Festival de la Esperanza"
                  className="w-full h-96 object-cover"
                />
              </CardContent>
            </Card>
            <p className="text-center text-gray-600 mt-4">
              Descarga el mapa completo del evento para ubicar fácilmente todas las actividades, escenarios y servicios
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container mx-auto">
          <h2
            className="text-6xl md:text-7xl font-bold text-center mb-12"
            style={{ color: "#004eb4" }}
          >
            Galería de Fotos
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-12 grid-rows-8 gap-4 h-[600px]">
              {/* Large featured image */}
              <div className="col-span-6 row-span-4 overflow-hidden rounded-lg shadow-lg transform rotate-1">
                <img
                  src="/festival-community-celebration-with-families-and-c.jpg"
                  alt="Celebración familiar del festival"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Medium images */}
              <div className="col-span-3 row-span-3 overflow-hidden rounded-lg shadow-md transform -rotate-2">
                <img
                  src="/catholic-choir-singing.jpg"
                  alt="Coro católico cantando"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="col-span-3 row-span-2 overflow-hidden rounded-lg shadow-md transform rotate-3">
                <img
                  src="/young-christian-band.jpg"
                  alt="Banda cristiana joven"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Small images scattered */}
              <div className="col-span-2 row-span-2 overflow-hidden rounded-lg shadow-sm transform -rotate-1">
                <img
                  src="/mariachi-band-performing.jpg"
                  alt="Mariachi actuando"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="col-span-4 row-span-2 overflow-hidden rounded-lg shadow-md transform rotate-1">
                <img
                  src="/contemporary-christian-worship-band.jpg"
                  alt="Banda de adoración contemporánea"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="col-span-3 row-span-3 overflow-hidden rounded-lg shadow-lg transform -rotate-2">
                <img
                  src="/children-choir-singing.jpg"
                  alt="Coro infantil"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="col-span-3 row-span-2 overflow-hidden rounded-lg shadow-md transform rotate-2">
                <img
                  src="/classical-sacred-music-ensemble.jpg"
                  alt="Ensamble de música sacra"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="col-span-2 row-span-3 overflow-hidden rounded-lg shadow-sm transform -rotate-3">
                <img
                  src="/youth-christian-pop-band.jpg"
                  alt="Banda pop cristiana juvenil"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="col-span-4 row-span-2 overflow-hidden rounded-lg shadow-md transform rotate-1">
                <img
                  src="/family-christian-music-group.jpg"
                  alt="Grupo musical familiar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8">
            Revive los mejores momentos de nuestras ediciones anteriores y únete a crear nuevos recuerdos
          </p>
        </div>
      </section>

      <footer className="py-12 px-4" style={{ backgroundColor: "#00407d", color: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#ffd336" }}>
                Festival de la Esperanza
              </h3>
              <p className="text-gray-300">
                Celebrando la fe, la familia y la comunidad en un ambiente de alegría y esperanza.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#ffd336" }}>
                Redes Sociales
              </h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Facebook: @FestivalEsperanza
                </a>
                <a
                  href="https://instagram.com/festivaldelaesperanzamty"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @festivaldelaesperanzamty
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  WhatsApp: +52 123 456 7890
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
    </div>
  )
}
