import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/componentes/ui/card";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Javier Cuevas",
    specialty: "Implantología y Cirugía Oral",
    description: "Especialista en la rehabilitación de implantes dentales y cirugía oral avanzada. Su precisión es su mayor virtud.",
    avatar: "/images/equipo/javi_solo.png",
    initials: "JC",
    aiHint: "professional man smiling"
  },
  {
    name: "Raquel Martín Sánchez",
    specialty: "Ortodoncista",
    description: "Especializada en ortodoncia y armonización orofacial",
    avatar: "/images/equipo/raquel_dent.png",
    initials: "RM",
    aiHint: "professional woman smiling"
  },
  {
    name: "Carmen",
    specialty: "Odontóloga General y Estética",
    description: "Especialista en odontología general y estética, dedicada a mejorar la salud y apariencia de la sonrisa de sus pacientes.",
    avatar: "/images/equipo/carmen_sola.png",
    initials: "C",
    aiHint: "professional woman smiling"
  },
  /*{
    name: "Florencia D'Antiochia Garofalo",
    specialty: "Odontóloga General y Estética",
    description: "Especialista en odontología general y estética, dedicada a mejorar la salud y apariencia de la sonrisa de sus pacientes.",
    avatar: "/images/equipo/raquel_sola.png",
    initials: "FD",
    aiHint: "professional woman smiling"
  },*/
  {
    name: "Raquel", 
    specialty: "Higienista Dental",
    description: "Especialista en la prevención y tratamiento de enfermedades bucales, así como en la promoción de la salud dental.",
    avatar: "/images/equipo/raquel_sola.png",
    initials: "RC",
    aiHint: "professional dentist smiling"
  }
  
];

export default function TeamPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Equipo médico especializado en Torre del Mar
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Nuestro equipo de especialistas lleva más de 15 años cuidando la salud bucodental de los vecinos de Torre del Mar y alrededores. Formación continua y trato cercano nos distinguen.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center flex flex-col items-center pt-8 shadow-lg hover:scale-105 transition-transform duration-300">
              <CardHeader className="items-center">
                <div className="relative w-56 h-72 rounded-[20%] overflow-hidden border-4 border-primary hover:scale-105 transition-transform duration-300">
                  <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  //sizes="100vw" 
                  className="object-cover"
                  data-ai-hint={member.aiHint}
                  />
                </div>
                <CardTitle className="font-headline text-xl mt-4">{member.name}</CardTitle>
                <CardDescription className="text-primary font-semibold">{member.specialty}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
