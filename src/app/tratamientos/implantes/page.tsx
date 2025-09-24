import { Button } from "@/componentes/ui/button";
import { Card, CardContent } from "@/componentes/ui/card";
import { CheckCircle, Clock, ThumbsUp, HeartPulse } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import implante from "../../../../public/images/implante.jpg";

export default function ImplantesDentales() {
  const benefits = [
    {
      icon: <ThumbsUp className="h-6 w-6 text-primary" />,
      title: "Funcionalidad Total",
      description: "Recupera el 100% de tu capacidad masticatoria"
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-primary" />,
      title: "Salud Ósea",
      description: "Previene la pérdida de hueso y mantiene la estructura facial"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Larga Duración",
      description: "Con los cuidados adecuados, pueden durar toda la vida"
    }
  ];

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={implante}
          alt="Implantes Dentales"
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="center 20%"
          className="z-0 scale-[1]"
        />
        <div className="relative z-20 container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Implantes Dentales</h1>
          <p className="text-xl max-w-3xl mx-auto">
            La solución definitiva para recuperar tu sonrisa y calidad de vida
          </p>
        </div>
      </section>

      <section className="py-16 container">
        <div className="grid md:grid-cols-2 gap-12 items-start ml-5">
          <div>
            <h2 className="text-3xl font-bold mb-6">¿Qué son los implantes dentales?</h2>
            <p className="text-lg mb-6">
              Los implantes dentales son raíces artificiales de titanio que se colocan quirúrgicamente en el hueso maxilar para reemplazar dientes perdidos. Sobre estos implantes se pueden colocar coronas, puentes o dentaduras, proporcionando una solución permanente y natural.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">¿Por qué elegir implantes dentales?</h3>
            <ul className="space-y-4 mb-8">
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

            <Button asChild size="lg">
              <Link href="/contacto">Consulta Gratuita</Link>
            </Button>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 ">
                <h3 className="text-xl font-bold mb-4">El Procedimiento</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold">Diagnóstico y planificación:</span>
                      <p className="text-muted-foreground">Evaluación completa con radiografías 3D y diseño digital de la sonrisa.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold">Colocación del implante:</span>
                      <p className="text-muted-foreground">Procedimiento quirúrgico mínimamente invasivo bajo anestesia local.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold">Período de oseointegración:</span>
                      <p className="text-muted-foreground">El implante se fusiona con el hueso durante 2-6 meses.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold">Colocación de la corona:</span>
                      <p className="text-muted-foreground">Diseño y ajuste de la prótesis definitiva personalizada.</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Resultados y Beneficios</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    Aspecto y función idénticos a los dientes naturales
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    Mejora en la pronunciación y la alimentación
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    Previene problemas de ATM y maloclusión
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    Mantenimiento sencillo y duradero
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
