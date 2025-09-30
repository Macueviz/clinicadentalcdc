import { Button } from "@/componentes/ui/button";
import { Card, CardContent } from "@/componentes/ui/card";
import { CheckCircle, Shield, Target, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import conservadoraImage from "../../../../public/images/cepillado-dientes.jpg";

export default function OdontologiaConservadora() {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Preservación Dental",
      description: "Mantenemos la mayor cantidad posible de estructura dental natural"
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Tratamiento Preciso",
      description: "Técnicas mínimamente invasivas para resultados óptimos"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Cuidado Integral",
      description: "Prevención y tratamiento para una salud dental duradera"
    }
  ];

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={conservadoraImage}
          alt="Odontología Conservadora en Torre del Mar"
          priority
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          className="z-0 scale-[1]"
        />
        <div className="relative z-20 container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Odontología Conservadora</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Preservamos tus dientes naturales con tratamientos mínimamente invasivos
          </p>
        </div>
      </section>

      <section className="py-16 container">
        <div className="grid md:grid-cols-2 gap-12 items-start ml-5">
          <div>
            <h2 className="text-3xl font-bold mb-6">Tratamientos Conservadores</h2>
            <p className="text-lg mb-6">
              La odontología conservadora se enfoca en prevenir, diagnosticar y tratar las enfermedades dentales de la manera menos invasiva posible, preservando al máximo la estructura dental natural.
            </p>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Nuestros Servicios</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold">Empastes Estéticos</span>
                      <p className="text-muted-foreground">Restauraciones con composite del color de tu diente para un resultado natural.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold">Incrustaciones</span>
                      <p className="text-muted-foreground">Restauraciones indirectas de porcelana o composite para cavidades amplias.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold">Endodoncia</span>
                      <p className="text-muted-foreground">Tratamiento de conductos para salvar dientes con pulpa dañada.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold">Selladores de Fisuras</span>
                      <p className="text-muted-foreground">Prevención de caries en molares y premolares.</p>
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
                <h3 className="text-xl font-bold mb-4">¿Cuándo es Necesaria?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    Presencia de caries en diferentes estadios
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    Fracturas o fisuras dentales
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    Desgaste dental por bruxismo
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    Infecciones de la pulpa dental
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    Prevención en dientes sanos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Ventajas del Tratamiento</h3>
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

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Proceso de Tratamiento</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold">Diagnóstico</h4>
                      <p className="text-muted-foreground">Examen clínico y radiográfico completo</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold">Planificación</h4>
                      <p className="text-muted-foreground">Diseño del plan de tratamiento personalizado</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold">Tratamiento</h4>
                      <p className="text-muted-foreground">Realización con técnicas mínimamente invasivas</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold">Seguimiento</h4>
                      <p className="text-muted-foreground">Control y mantenimiento a largo plazo</p>
                    </div>
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