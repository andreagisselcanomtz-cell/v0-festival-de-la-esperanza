import { Card, CardContent } from "@/components/ui/card"

export function EventMapSection() {
  return (
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
  )
}
