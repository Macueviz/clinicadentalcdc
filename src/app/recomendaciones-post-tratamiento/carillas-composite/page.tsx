import { Card, CardContent } from "@/componentes/ui/card";
import { CheckCircle, Shield, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/componentes/ui/button";
import sonrisaImage from "../../../../public/images/dientesBlancos.png";

export default function CarillasComposite() {
  const cuidados = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Evitar objetos duros",
      description: "No morder objetos duros ni consumir alimentos excesivamente duros o pegajosos para prevenir fracturas."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Higiene específica",
      description: "Mantener higiene escrupulosa con cepillado suave usando técnica de barrido (no circular) y hilo dental."
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Controles regulares",
      description: "Realizar controles cada 6 meses para revisión, pulido y mantenimiento de las carillas."
    }
  ];

  const alimentosEvitar = [
    "Café y té durante los primeros días",
    "Vino tinto y bebidas con colorantes",
    "Chocolate y salsas oscuras",
    "Alimentos muy duros o pegajosos"
  ];

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={sonrisaImage}
          alt="Cuidados de carillas de composite en Torre del Mar"
          priority
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          className="z-0"
        />
        <div className="relative z-20 container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cuidados de Carillas de Composite</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Mantén tu sonrisa perfecta siguiendo estas recomendaciones esenciales
          </p>
        </div>
      </section>

      <section className="py-16 container">
        <div className="grid md:grid-cols-2 gap-8 items-start mx-4 md:mx-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Cuidados Fundamentales</h2>
            <p className="text-lg mb-6">
              Las carillas de composite requieren cuidados específicos para mantener su aspecto y durabilidad. 
              Siguiendo estas indicaciones, tus carillas se mantendrán perfectas por mucho más tiempo.
            </p>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Principales Recomendaciones</h3>
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
                  <h3 className="text-xl font-bold">Alimentos a Evitar</h3>
                </div>
                <ul className="space-y-3">
                  {alimentosEvitar.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Especialmente importantes durante los primeros días para prevenir tinciones del composite.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Técnica de Higiene Específica</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary">Cepillado Correcto</h4>
                    <p className="text-muted-foreground">
                      Utiliza técnica de barrido (movimiento vertical) en lugar de circular. 
                      Enfócate especialmente en los bordes de las carillas para evitar acumulación de placa.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Productos Recomendados</h4>
                    <p className="text-muted-foreground">
                      Usa únicamente productos dentales recomendados por tu dentista. 
                      Evita dentífricos abrasivos o blanqueadores sin indicación profesional.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Protección Nocturna</h4>
                    <p className="text-muted-foreground">
                      Si presentas bruxismo, es fundamental usar férula de descarga nocturna 
                      para proteger las carillas del desgaste y posibles fracturas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <h3 className="text-lg font-bold text-blue-700">Mantenimiento Profesional</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Las citas de control cada 6 meses son esenciales para el pulido profesional, 
                  revisión del estado de las carillas y mantenimiento preventivo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}