import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Smile, Target, Timer } from "lucide-react";
import Link from "next/link";

export default function Ortodoncia() {
  const benefits = [
    {
      icon: <Smile className="h-6 w-6 text-primary" />,
      title: "Estética Perfecta",
      description: "Alineación dental que mejora tu sonrisa y confianza"
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Función Óptima",
      description: "Corrección de la mordida y mejora en la masticación"
    },
    {
      icon: <Timer className="h-6 w-6 text-primary" />,
      title: "Tratamiento Personalizado",
      description: "Diferentes opciones adaptadas a cada paciente"
    }
  ];

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="/images/ortodoncia-hero.jpg"
          alt="Ortodoncia"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ortodoncia</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Consigue la sonrisa que siempre has deseado con nuestros tratamientos de ortodoncia
          </p>
        </div>
      </section>

      <section className="py-16 container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">Tipos de Ortodoncia</h2>
            <p className="text-lg mb-6">
              En nuestra clínica ofrecemos diferentes tipos de ortodoncia adaptados a las necesidades y preferencias de cada paciente, desde brackets tradicionales hasta sistemas invisibles.
            </p>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Nuestras Opciones</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold">Ortodoncia Invisible</span>
                      <p className="text-muted-foreground">Alineadores transparentes removibles, discretos y cómodos.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold">Brackets Estéticos</span>
                      <p className="text-muted-foreground">Brackets de cerámica o zafiro que se mimetizan con tus dientes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold">Ortodoncia Tradicional</span>
                      <p className="text-muted-foreground">Brackets metálicos de alta eficacia para casos complejos.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Button asChild size="lg">
              <Link href="/contacto">Consulta Gratuita</Link>
            </Button>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">¿Para quién está indicada?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    Personas con dientes desalineados o apiñados
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    Casos de mordida abierta, cruzada o sobremordida
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    Problemas de espacio dental
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    Cualquier edad: niños, adolescentes y adultos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Beneficios del Tratamiento</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1">{benefit.icon}</div>
                      <div>
                        <h4 className="font-bold">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
