import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, BookOpen } from "lucide-react"
import workshopsData from "@/data/workshops-section.json"

export function WorkshopsSection() {
  const { title, titleColor, backgroundImage, workshops, buttonText, buttonStyle } = workshopsData
  return (
    <section
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
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {workshops.map((taller, index) => (
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
                {taller.url &&
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-2 text-white hover:opacity-90 bg-transparent"
                  style={buttonStyle}
                  onClick={() => window.open((taller as { url: string }).url, "_blank")}
                >
                  {buttonText}
                </Button>
                }
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
