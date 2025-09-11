import { Button } from "@/componentes/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/componentes/ui/card";
import { Check, CreditCard, Percent } from "lucide-react";
import Link from "next/link";

export default function FinancingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              Financiación a tu Medida
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              En Sonrisa Nova, queremos que el coste de tu tratamiento no sea un impedimento para conseguir la sonrisa que deseas. Por eso, te ofrecemos facilidades de pago y opciones de financiación flexibles.
            </p>
          </div>

          <Card className="mt-12 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-center">Nuestros Planes de Financiación</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Financiación hasta 24 meses</h3>
                    <p className="text-muted-foreground">Paga tu tratamiento en cómodas cuotas sin intereses ni comisiones.</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Percent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Planes a Largo Plazo</h3>
                    <p className="text-muted-foreground">Financia hasta en 60 meses con condiciones muy favorables. Consúltanos para un estudio personalizado.</p>
                  </div>
                </div>
              </div>
               <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Aprobación Rápida</h3>
                    <p className="text-muted-foreground">Gestionamos tu solicitud de financiación de forma ágil y con una mínima documentación para tu comodidad.</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Total Transparencia</h3>
                    <p className="text-muted-foreground">Te ofrecemos un presupuesto detallado y sin sorpresas, explicando todas las opciones de pago disponibles.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-16 text-center bg-card p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold font-headline">¿Hablamos?</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Nuestro equipo está a tu disposición para resolver cualquier duda y ayudarte a encontrar el plan de financiación que mejor se adapte a tus necesidades.
            </p>
            <Button asChild size="lg" className="mt-6 font-bold">
              <Link href="/contacto">Solicita Información</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
