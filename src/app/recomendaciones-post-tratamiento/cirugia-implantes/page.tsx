import { Card, CardContent } from "@/componentes/ui/card";
import { CheckCircle, Shield, AlertTriangle, Calendar, Pill, Thermometer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/componentes/ui/button";
import implanteImage from "../../../../public/images/implante2.jpg";

export default function CirugiaImplantes() {
  const cuidadosEsenciales = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Higiene especial",
      description: "Evitar cepillar directamente la zona intervenida los primeros días. Usar enjuagues antisépticos si está indicado."
    },
    {
      icon: <Pill className="h-6 w-6 text-primary" />,
      title: "Medicación estricta",
      description: "Seguir la pauta de analgésicos y antibióticos con rigor y puntualidad para prevenir infecciones."
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Controles programados",
      description: "Asistir puntualmente a todas las citas de control para evaluar la integración del implante."
    }
  ];

  const prohibicionesPrimerosDias = [
    "Esfuerzos físicos intensos durante al menos la primera semana",
    "Fumar y consumir alcohol (mínimo una semana post-quirúrgica)",
    "Alimentos duros, calientes o pegajosos",
    "Cepillado directo sobre la zona operada"
  ];

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={implanteImage}
          alt="Cuidados después de cirugía de implantes dentales en Torre del Mar"
          priority
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          className="z-0"
        />
        <div className="relative z-20 container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cuidados Post-Cirugía de Implantes</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Protocolo específico para garantizar el éxito de tu implante dental
          </p>
        </div>
      </section>

      <section className="py-16 container">
        <div className="grid md:grid-cols-2 gap-8 items-start mx-4 md:mx-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Período Post-Quirúrgico</h2>
            <p className="text-lg mb-6">
              La cirugía de implantes requiere cuidados específicos para asegurar la osteointegración correcta. 
              Los primeros días son cruciales para el éxito a largo plazo del tratamiento.
            </p>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Cuidados Fundamentales</h3>
                <div className="space-y-4">
                  {cuidadosEsenciales.map((cuidado, index) => (
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
                  <h3 className="text-xl font-bold">Restricciones Primera Semana</h3>
                </div>
                <ul className="space-y-3">
                  {prohibicionesPrimerosDias.map((item, index) => (
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
                <h3 className="text-xl font-bold mb-4">Protocolo Detallado</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary">Alimentación Específica</h4>
                    <p className="text-muted-foreground">
                      Consumir únicamente alimentos fríos y de consistencia blanda. 
                      Batidos, yogures, purés y sopas frías son ideales los primeros días.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Control de Inflamación</h4>
                    <p className="text-muted-foreground">
                      Aplicar hielo de forma intermitente las primeras 24 horas. 
                      La inflamación es normal hasta 48-72 horas post-cirugía.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Higiene Oral Modificada</h4>
                    <p className="text-muted-foreground">
                      Usar enjuagues antisépticos con clorhexidina según indicación profesional. 
                      Evitar cepillado directo sobre la zona hasta nueva indicación.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Thermometer className="h-5 w-5 text-red-500" />
                  <h3 className="text-lg font-bold text-red-700">Signos de Alerta</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Contactar inmediatamente si presentas:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Inflamación progresiva después de 72 horas</li>
                  <li>• Dolor intenso que no mejora con medicación</li>
                  <li>• Fiebre superior a 38°C</li>
                  <li>• Supuración o mal olor en la zona</li>
                  <li>• Sangrado abundante</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <h3 className="text-lg font-bold text-blue-700">Cronograma de Seguimiento</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Primera semana:</span>
                    <span className="text-muted-foreground">Control post-quirúrgico</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">2-3 meses:</span>
                    <span className="text-muted-foreground">Evaluación osteointegración</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">4-6 meses:</span>
                    <span className="text-muted-foreground">Colocación de corona</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}