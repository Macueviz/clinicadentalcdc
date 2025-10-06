import { Card, CardContent } from "@/componentes/ui/card";
import { CheckCircle, Shield, AlertTriangle, Calendar, Moon, Droplets } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/componentes/ui/button";
import sonrisaImage from "../../../../public/images/iconSonrisa.png";

export default function HigieneProtesis() {
  const cuidadosDiarios = [
    {
      icon: <Droplets className="h-6 w-6 text-primary" />,
      title: "Limpieza después de cada comida",
      description: "Retirar y limpiar la prótesis con productos específicos, evitando pastas dentales convencionales abrasivas."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Higiene de tejidos bucales",
      description: "Cepillar suavemente encías, lengua y paladar con cepillo de cerdas suaves para mantener la salud bucal."
    },
    {
      icon: <Moon className="h-6 w-6 text-primary" />,
      title: "Descanso nocturno",
      description: "No dormir con la prótesis (salvo indicación específica) para permitir que las encías descansen 6 horas mínimo."
    }
  ];

  const productosEspecificos = [
    "Cepillos especiales para prótesis",
    "Limpiadores no abrasivos específicos",
    "Tabletas efervescentes para desinfección",
    "Soluciones de inmersión recomendadas"
  ];

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={sonrisaImage}
          alt="Cuidados de prótesis removible en Torre del Mar"
          priority
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          className="z-0"
        />
        <div className="relative z-20 container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Higiene de Prótesis Removible</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Mantén tu prótesis en perfecto estado y cuida la salud de tus encías
          </p>
        </div>
      </section>

      <section className="py-16 container">
        <div className="grid md:grid-cols-2 gap-8 items-start mx-4 md:mx-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Rutina Diaria Esencial</h2>
            <p className="text-lg mb-6">
              Una correcta higiene de la prótesis removible es fundamental para mantener la salud bucal, 
              prevenir infecciones y asegurar la durabilidad del aparato protésico.
            </p>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Cuidados Fundamentales</h3>
                <div className="space-y-4">
                  {cuidadosDiarios.map((cuidado, index) => (
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
                  <Shield className="h-6 w-6 text-blue-500" />
                  <h3 className="text-xl font-bold">Productos Específicos</h3>
                </div>
                <ul className="space-y-3">
                  {productosEspecificos.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-amber-600 mt-4 font-medium">
                  ❌ Evitar: hipoclorito, agua oxigenada, pastas dentales convencionales
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Protocolo Detallado de Limpieza</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary">Manipulación Segura</h4>
                    <p className="text-muted-foreground">
                      Realizar la limpieza sobre una superficie suave o toalla para evitar daños por caídas. 
                      Sujetar firmemente pero con cuidado durante el proceso.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Limpieza Completa</h4>
                    <p className="text-muted-foreground">
                      Limpiar todas las superficies: partes rosadas, metálicas y elementos de retención. 
                      Usar cepillo específico con movimientos suaves pero efectivos.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Inmersión Nocturna</h4>
                    <p className="text-muted-foreground">
                      Mantener sumergida en agua o solución específica durante la noche. 
                      Usar tabletas efervescentes 2-3 veces por semana para desinfección profunda.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <h3 className="text-lg font-bold text-amber-700">Señales de Problemas</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Consulta si observas:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cambios en el ajuste de la prótesis</li>
                  <li>• Irritación o llagas en las encías</li>
                  <li>• Mal olor persistente</li>
                  <li>• Fracturas o desgaste visible</li>
                  <li>• Dolor al usar la prótesis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-green-500" />
                  <h3 className="text-lg font-bold text-green-700">Mantenimiento Profesional</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Controles cada 6 meses para revisión, ajuste y evaluación del estado de la prótesis 
                  y los tejidos bucales. Estos controles son esenciales para detectar problemas temprano.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}