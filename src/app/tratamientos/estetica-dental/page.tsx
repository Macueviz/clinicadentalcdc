import { Button } from "@/componentes/ui/button";
import { Card, CardContent } from "@/componentes/ui/card";
import { CheckCircle, Sparkles, Camera, PaintBucket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dientes from "../../../../public/images/dientesBlancos.png";

export default function EsteticaDental() {
  const treatments = [
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Blanqueamiento Dental",
      description: "Aclara varios tonos el color de tus dientes"
    },
    {
      icon: <Camera className="h-6 w-6 text-primary" />,
      title: "Carillas Dentales",
      description: "Transforma tu sonrisa con carillas de porcelana"
    },
    {
      icon: <PaintBucket className="h-6 w-6 text-primary" />,
      title: "Diseño de Sonrisa",
      description: "Planificación digital para resultados perfectos"
    }
  ];

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
            src={dientes}
            alt="Ortodoncia Invisible"
            priority
            layout="fill"
            objectFit="cover"
            objectPosition="center 20%"
            className="z-0 scale-[1]"
          />
        <div className="relative z-20 container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Estética Dental</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Diseñamos sonrisas perfectas que reflejan tu personalidad
          </p>
        </div>
      </section>

      <section className="py-16 container">
        <div className="grid md:grid-cols-2 gap-12 items-start ml-5">
          <div>
            <h2 className="text-3xl font-bold mb-6">Tratamientos Estéticos</h2>
            <p className="text-lg mb-6">
              Combinamos arte y tecnología para crear sonrisas naturales y radiantes. Nuestros tratamientos estéticos están diseñados para mejorar la apariencia de tus dientes manteniendo su salud.
            </p>

            <div className="space-y-6 mb-8">
              {treatments.map((treatment, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{treatment.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{treatment.title}</h3>
                        <p className="text-muted-foreground">{treatment.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button asChild size="lg">
              <Link href="/contacto">Consulta Gratuita</Link>
            </Button>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">¿Qué Podemos Mejorar?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    Color de los dientes
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    Forma y tamaño dental
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    Espacios entre dientes
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    Dientes desgastados o dañados
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Nuestro Proceso</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold">Diagnóstico Digital:</span>
                      <p className="text-muted-foreground">Análisis completo y fotografías profesionales.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold">Diseño de Sonrisa:</span>
                      <p className="text-muted-foreground">Visualización digital de resultados.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold">Tratamiento:</span>
                      <p className="text-muted-foreground">Procedimientos mínimamente invasivos.</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
