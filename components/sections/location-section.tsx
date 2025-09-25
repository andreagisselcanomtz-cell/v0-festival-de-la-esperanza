import { Button } from "@/components/ui/button"
import { MapPin, Users, Heart } from "lucide-react"
import locationData from "@/data/location-section.json"

export function LocationSection() {
  const { title, titleColor, backgroundImage, venue, features, map } = locationData
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
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold" style={{ color: titleColor }}>
              {venue.name}
            </h3>
            <p className="text-lg text-gray-700">{venue.address}</p>
            <div className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon === "MapPin" ? MapPin : 
                                   feature.icon === "Users" ? Users : Heart
                return (
                  <div key={index} className="flex items-center gap-3">
                    <IconComponent className="w-6 h-6" style={{ color: feature.iconColor }} />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                )
              })}
            </div>
            <Button
              className="text-white hover:opacity-90"
              style={map.buttonStyle}
              onClick={() => window.open(map.buttonUrl, "_blank")}
            >
              {map.buttonText}
            </Button>
          </div>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={map.iframe.src}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={map.iframe.title}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
