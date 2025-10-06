import { Card, CardContent } from "@/componentes/ui/card";
import { CheckCircle, Shield, AlertTriangle, Clock, Snowflake, Coffee } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/componentes/ui/button";
import blanqueamientoImage from "../../../../public/images/dientesBlancos.png";

export default function BlanqueamientoCasa() {
  const pasosBlanqueamiento = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Preparación previa",
      description: "Cepillar y usar hilo dental antes de cada aplicación para maximizar la efectividad del gel blanqueador."
    },
    {
      icon: <Snowflake className="h-6 w-6 text-primary" />,
      title: "Conservación del gel",
      description: "Mantener las jeringas refrigeradas y sacarlas 10 minutos antes del uso para que alcancen temperatura ambiente."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Tiempo de aplicación",
      description: "Usar las férulas 90-120 minutos o durante la noche según indicación, sin exceder nunca el tiempo recomendado."
    }
  ];

  const dietaBlanca = [
    "Café, té y bebidas con cafeína",
    "Vino tinto y bebidas alcohólicas oscuras",
    "Gaseosas con colorantes",
    "Salsas oscuras (soja, tomate, curry)",
    "Frutas pigmentadas (arándanos, moras)",
    "Chocolate y dulces con colorantes"
  ];

  const alimentosPermitidos = [
    "Agua (preferiblemente)",
    "Leche y productos lácteos blancos",
    "Pollo y pescado blanco",
    "Arroz blanco y pasta sin salsas",
    "Pan blanco y cereales claros",
    "Frutas claras (plátano, pera pelada)"
  ];

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={blanqueamientoImage}
          alt="Blanqueamiento dental en casa - Torre del Mar"
          priority
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          className="z-0"
        />
        <div className="relative z-20 container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blanqueamiento en Casa</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Protocolo completo para obtener los mejores resultados de forma segura
          </p>
        </div>
      </section>

      <section className="py-16 container">
        <div className="grid md:grid-cols-2 gap-8 items-start mx-4 md:mx-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Protocolo de Aplicación</h2>
            <p className="text-lg mb-6">
              El blanqueamiento en casa requiere seguir un protocolo específico para obtener resultados óptimos 
              y duraderos, minimizando la sensibilidad dental.
            </p>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Pasos Fundamentales</h3>
                <div className="space-y-4">
                  {pasosBlanqueamiento.map((paso, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">{paso.icon}</div>
                      <div>
                        <h4 className="font-bold">{paso.title}</h4>
                        <p className="text-muted-foreground">{paso.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-500" />
                  <h3 className="text-xl font-bold">Aplicación del Gel</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Colocar solo una gota (tamaño grano de arroz) por diente</li>
                  <li>• Evitar el exceso que contacte con las encías</li>
                  <li>• Retirar inmediatamente cualquier gel que toque las encías</li>
                  <li>• Limpiar férulas después de cada uso con agua fría</li>
                </ul>
              </CardContent>
            </Card>

            <Button asChild size="lg">
              <Link href="/contacto">Consulta Gratuita</Link>
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Coffee className="h-6 w-6 text-red-500" />
                  <h3 className="text-xl font-bold text-red-700">Dieta Blanca - Evitar</h3>
                </div>
                <ul className="space-y-2">
                  {dietaBlanca.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-red-600 mt-3 font-medium">
                  🚭 Prohibido fumar: principal causa de re-pigmentación
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-bold text-green-700">Alimentos Permitidos</h3>
                </div>
                <ul className="space-y-2">
                  {alimentosPermitidos.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Duración de la Dieta Blanca</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                    <span className="font-medium">Mínimo:</span>
                    <span className="text-muted-foreground">48-72 horas</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <span className="font-medium">Recomendado:</span>
                    <span className="text-muted-foreground">7-10 días</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                    <span className="font-medium">Ideal:</span>
                    <span className="text-muted-foreground">15 días completos</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <h3 className="text-lg font-bold text-blue-700">Manejo de Sensibilidad</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Usar pasta desensibilizante durante el tratamiento</p>
                  <p>• Aplicar gel desensibilizante en las férulas si es necesario</p>
                  <p>• Evitar alimentos muy fríos o calientes</p>
                  <p>• Reducir tiempo de aplicación si la sensibilidad es intensa</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h4 className="font-bold text-blue-800 mb-2">Regla Simple:</h4>
                <p className="text-blue-700 text-sm italic">
                  "Si puede manchar tus dedos, puede manchar tus dientes"
                </p>
                <p className="text-xs text-blue-600 mt-2">
                  Si consumes algo prohibido accidentalmente: enjuagar inmediatamente con agua 
                  y cepillar después de 30-60 minutos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}