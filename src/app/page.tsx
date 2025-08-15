import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Smile, Stethoscope } from "lucide-react";
import Image from "next/image";
import dentalClinicImage from "../images/pexels-karolina-grabowska-6627353.jpg";
import dentalClinicTreatment from "../images/jonathan-borba-v_2FRXEba94-unsplash.jpg";
import Link from "next/link";

const treatments = [
  {
    name: "Implantes Dentales",
    description: "Recupera la funcionalidad y estética de tu sonrisa con implantes de última generación.",
    icon: <Stethoscope className="h-10 w-10" />,
  },
  {
    name: "Ortodoncia",
    description: "Alinea tus dientes y mejora tu mordida con nuestras soluciones de ortodoncia invisible y tradicional.",
    icon: <Smile className="h-10 w-10" />,
  },
  {
    name: "Estética Dental",
    description: "Diseñamos tu sonrisa perfecta con blanqueamientos, carillas y otros tratamientos estéticos.",
    icon: <Users className="h-10 w-10" />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={dentalClinicImage}
          alt="Clínica dental CDC"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="dental clinic interior"
        />
        <div className="relative z-20 container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
            Tu Sonrisa, Nuestra Pasión
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
            En Clínica Dental Cuevas, combinamos la última tecnología con un trato cercano y profesional para ofrecerte la mejor experiencia dental.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg"  className="font-bold">
              <Link href="/contacto">Pide tu Cita</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary-foreground">
                Bienvenidos a Clínica Dental Cuevas
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Somos una clínica dental dedicada a proporcionar un cuidado bucodental integral y de máxima calidad. Nuestro equipo de especialistas se compromete a ayudarte a conseguir y mantener una sonrisa sana y bonita para toda la vida.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><span className="font-bold">Tecnología Avanzada:</span> Equipamiento de última generación para diagnósticos precisos y tratamientos eficaces.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><span className="font-bold">Equipo Experto:</span> Profesionales altamente cualificados y en constante formación.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><span className="font-bold">Atención Personalizada:</span> Nos enfocamos en tus necesidades para ofrecerte un plan de tratamiento a tu medida.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src={dentalClinicTreatment}
                alt="Equipo de CDC"
                width={600}
                height={500}
                className="w-full h-full object-cover"
                data-ai-hint="friendly dentist"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="treatments" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Tratamientos Destacados</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Ofrecemos una amplia gama de servicios para cubrir todas tus necesidades dentales.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <Card key={treatment.name} className="text-center p-6 flex flex-col items-center bg-background transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <CardContent className="flex flex-col items-center gap-4">
                  <div className="text-primary">{treatment.icon}</div>
                  <CardTitle className="font-headline text-2xl">{treatment.name}</CardTitle>
                  <CardDescription>{treatment.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild size="lg" className="font-bold">
              <Link href="/tratamientos">Ver todos los tratamientos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
