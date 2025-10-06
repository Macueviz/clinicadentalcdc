import { Card, CardContent } from "@/componentes/ui/card";
import { CheckCircle, Shield, AlertTriangle, Clock, Snowflake } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/componentes/ui/button";
import cirugiaImage from "../../../../public/images/implante.jpg";

export default function CuidadosPostExtraccion() {
  const cuidadosInmediatos = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Mantener la gasa",
      description: "Presionar la gasa sobre la zona durante 30-60 minutos tras la extracción para favorecer la formación del coágulo."
    },
    {
      icon: <Snowflake className="h-6 w-6 text-primary" />,
      title: "Aplicar frío",
      description: "Hielo intermitente sobre la zona externa (10-15 minutos cada hora) durante las primeras 24 horas."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Reposo necesario",
      description: "Mantener reposo y evitar actividad física intensa las primeras 24-48 horas."
    }
  ];

  const prohibiciones = [
    "Enjuagar, escupir o succionar (incluyendo pajillas) las primeras horas",
    "Fumar o consumir alcohol hasta la recuperación avanzada",
    "Alimentos calientes hasta que la zona esté cicatrizada",
    "Actividad física intensa las primeras 48 horas"
  ];

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={cirugiaImage}
          alt="Cuidados post-extracción dental en Torre del Mar"
          priority
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          className="z-0"
        />
        <div className="relative z-20 container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cuidados Post-Extracción</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Instrucciones cruciales para una recuperación segura y sin complicaciones
          </p>
        </div>
      </section>

      <section className="py-16 container">
        <div className="grid md:grid-cols-2 gap-8 items-start mx-4 md:mx-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Primeras Horas Críticas</h2>
            <p className="text-lg mb-6">
              Los cuidados inmediatos después de una extracción dental son fundamentales para evitar complicaciones 
              como el alveolo seco y asegurar una cicatrización adecuada.
            </p>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Cuidados Inmediatos</h3>
                <div className="space-y-4">
                  {cuidadosInmediatos.map((cuidado, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">{cuidado.icon}</div>
                      <div>
                        <h4 className="font-bold">{cuidado.title}</h4>
                        <p className="text-muted-foreground">{cuidado.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Button asChild size="lg">
              <Link href="/contacto">Consulta Gratuita</Link>
            </Button>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  <h3 className="text-xl font-bold">Prohibiciones Estrictas</h3>
                </div>
                <ul className="space-y-3">
                  {prohibiciones.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Alimentación y Medicación</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary">Dieta Recomendada</h4>
                    <p className="text-muted-foreground">
                      Seguir dieta blanda y preferir alimentos fríos o templados. 
                      Evitar alimentos calientes que pueden disolver el coágulo.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Medicación Prescrita</h4>
                    <p className="text-muted-foreground">
                      Tomar analgésicos y antibióticos siguiendo estrictamente las indicaciones 
                      del profesional para controlar el dolor y prevenir infecciones.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Aplicación de Frío</h4>
                    <p className="text-muted-foreground">
                      El hielo debe aplicarse sobre la mejilla externamente, nunca directamente en la boca. 
                      Alternar 10-15 minutos con hielo y 10-15 minutos de descanso.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <h3 className="text-lg font-bold text-red-700">Urgencias - Contactar Inmediatamente</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sangrado abundante que no se detiene</li>
                  <li>• Fiebre superior a 38°C</li>
                  <li>• Dolor intenso que no mejora con medicación</li>
                  <li>• Signos de infección (pus, mal olor)</li>
                  <li>• Pérdida del coágulo (alveolo seco)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}