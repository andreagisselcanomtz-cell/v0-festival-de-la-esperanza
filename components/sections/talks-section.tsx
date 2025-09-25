import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Mic } from "lucide-react"
import talksData from "@/data/talks-section.json"

export function TalksSection() {
  const { title, titleColor, backgroundImage, talks } = talksData
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
          className={`text-6xl md:text-7xl font-bold text-center mb-12 ${titleColor}`}
        >
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {talks.map((charla, index) => (
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
