import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/componentes/ui/card";
import { Stethoscope, Smile, HeartPulse, ShieldCheck, Gem, UserCheck } from "lucide-react";

const treatments = [
  {
    title: "Implantes Dentales",
    description: "Reemplazamos dientes perdidos con implantes de titanio que se integran con tu hueso, ofreciendo una solución duradera y de aspecto natural.",
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
  },
  {
    title: "Ortodoncia",
    description: "Corregimos la alineación de tus dientes y la mordida con brackets tradicionales o alineadores invisibles para una sonrisa perfecta y funcional.",
    icon: <Smile className="h-10 w-10 text-primary" />,
  },
  {
    title: "Periodoncia",
    description: "Tratamos las enfermedades de las encías y el hueso que soporta los dientes, como la gingivitis y la periodontitis, para mantener tu boca sana.",
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
  },
  {
    title: "Estética Dental",
    description: "Mejoramos la apariencia de tu sonrisa con tratamientos como blanqueamiento dental, carillas de porcelana y contorneado estético.",
    icon: <Gem className="h-10 w-10 text-primary" />,
  },
];

export default function TreatmentsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Nuestros Tratamientos</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Descubre la gama completa de servicios que ofrecemos para cuidar de tu salud y estética dental. Utilizamos la tecnología más avanzada y un enfoque personalizado para garantizar los mejores resultados.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <Card key={treatment.title} className="flex flex-col text-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                {treatment.icon}
                <CardTitle className="font-headline text-2xl mt-4">{treatment.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{treatment.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
