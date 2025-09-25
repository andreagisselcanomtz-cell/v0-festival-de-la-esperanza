import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart } from "lucide-react"

export function TicketsSection() {
  return (
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
  )
}
