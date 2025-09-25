import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart } from "lucide-react"
import ticketsData from "@/data/tickets-section.json"

export function TicketsSection() {
  const { title, titleColor, backgroundImage, ticketTypes, purchaseSection } = ticketsData
  return (
    <section
      id="boletos"
      className="py-16 px-4"
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-6xl md:text-7xl font-bold text-center mb-12"
          style={{ color: titleColor }}
        >
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {ticketTypes.map((ticket, index) => (
            <Card key={index} className={`${ticket.borderColor} bg-white/95 backdrop-blur-sm`}>
              <CardHeader>
                <CardTitle className={`text-2xl ${ticket.titleColor}`}>{ticket.title}</CardTitle>
                <CardDescription>{ticket.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className={`text-4xl font-bold ${ticket.priceColor} mb-4`}>{ticket.price}</div>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  {ticket.features.map((feature, fIndex) => (
                    <li key={fIndex}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-primary bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{purchaseSection.title}</CardTitle>
            <CardDescription>{purchaseSection.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 border-2 border-dashed border-primary/30 rounded-lg p-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{purchaseSection.integrationTitle}</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {purchaseSection.integrationDescription}
                </p>
                <div className="bg-background p-4 rounded border text-left text-sm font-mono">
                  <div className="text-muted-foreground mb-2">// Ejemplo de configuración:</div>
                  <div>{purchaseSection.configExample}</div>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full text-lg py-6">
              {purchaseSection.buttonText}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              {purchaseSection.paymentMethods}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
