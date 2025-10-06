import { Card, CardContent } from "@/componentes/ui/card";
import { CheckCircle, Shield, AlertTriangle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/componentes/ui/button";
import limpiezaImage from "../../../../public/images/cepillado-dientes.jpg";

export default function LimpiezaDental() {
  const cuidados = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Cepillado correcto",
      description: "Usar un cepillo NUEVO de cerdas suaves/medias, prestando especial atención a las encías sensibles tras la eliminación del sarro."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Higiene interproximal",
      description: "Utilizar hilo dental y cepillos interproximales diariamente, siendo delicado en las zonas con sangrado."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Técnica profesional",
      description: "Seguir los consejos del higienista para una técnica correcta de cepillado y uso del hilo dental."
    }
  ];

  const evitar = [
    "Alimentos muy fríos, calientes, ácidos y picantes durante las primeras 24 horas",
    "Fumar o consumir alcohol durante el primer día",
    "Cepillado agresivo en zonas sensibles"
  ];

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={limpiezaImage}
          alt="Cuidados después de limpieza dental en Torre del Mar"
          priority
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          className="z-0"
        />
        <div className="relative z-20 container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cuidados Post-Limpieza Dental</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Indicaciones importantes para mantener los beneficios de tu tartrectomía
          </p>
        </div>
      </section>

      <section className="py-16 container">
        <div className="grid md:grid-cols-2 gap-8 items-start mx-4 md:mx-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Cuidados Esenciales</h2>
            <p className="text-lg mb-6">
              Después de una limpieza dental profesional (tartrectomía), tus encías pueden estar sensibles. 
              Sigue estos cuidados para una recuperación óptima y mantener los resultados del tratamiento.
            </p>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Recomendaciones Principales</h3>
                <div className="space-y-4">
                  {cuidados.map((cuidado, index) => (
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
                  <AlertTriangle className="h-6 w-6 text-amber-500" />
                  <h3 className="text-xl font-bold">Qué Evitar las Primeras 24h</h3>
                </div>
                <ul className="space-y-3">
                  {evitar.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Instrucciones Detalladas</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary">Técnica de Cepillado</h4>
                    <p className="text-muted-foreground">
                      Cepilla con movimientos suaves y circulares, prestando especial atención a la línea de las encías. 
                      El cepillo debe estar en ángulo de 45 grados hacia las encías.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Hilo Dental</h4>
                    <p className="text-muted-foreground">
                      Usa el hilo dental con cuidado, especialmente en zonas que puedan sangrar. 
                      El sangrado leve inicial es normal y mejorará con la práctica correcta.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Sensibilidad</h4>
                    <p className="text-muted-foreground">
                      Si experimentas sensibilidad, puedes usar una pasta dental específica para dientes sensibles. 
                      La sensibilidad debería disminuir en 2-3 días.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <h3 className="text-lg font-bold text-red-700">¿Cuándo Contactarnos?</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Consulta inmediatamente si presentas: molestias intensas, inflamación persistente 
                  después de 48 horas, o sangrado abundante que no mejora con los cuidados indicados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}