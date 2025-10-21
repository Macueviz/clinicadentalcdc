import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/componentes/ui/card";
import Image from "next/image";
import {Button} from "@/componentes/ui/button";
import Link from "next/link";

const teamMembers = [
  {
    name: "Dr. Javier Cuevas",
    specialty: "Implantología y Cirugía Oral",
    description: "Especialista en la rehabilitación de implantes dentales y cirugía oral avanzada.",
    avatar: "/images/equipo/javi_solo.png",
    initials: "JC",
    aiHint: "professional man smiling",
    slug: "javier-cuevas",
    bio: "Con más de 15 años de experiencia, el Dr. Javier Cuevas se ha especializado en implantología y cirugía oral...",
    experience: "15+ años",
    education: ["Universidad de Granada", "Máster en Implantología"],
    specializations: ["Implantes dentales", "Cirugía oral avanzada", "Rehabilitación bucal"]
  },
  {
    name: "Dra. Raquel Martín",
    specialty: "Ortodoncista",
    description: "Especializada en ortodoncia y armonización orofacial",
    avatar: "/images/equipo/raquel_dent.png",
    initials: "RM",
    aiHint: "professional woman smiling",
    slug: "raquel-martin-sanchez",
    bio: "Con más de 15 años de experiencia, la Dra. Raquel Martín Sánchez se ha especializado en ortodoncia y armonización orofacial.",
    experience: "15+ años",
    education: ["Universidad de Granada", "Máster en Ortodoncia"],
    specializations: ["Ortodoncia", "Armonización orofacial"]
  },
  {
    name: "Dra. Carmen Gálvez",
    specialty: "Odontóloga General y Estética",
    description: "Especialista en odontología general y estética.",
    avatar: "/images/equipo/carmen_sola.png",
    initials: "C",
    aiHint: "professional woman smiling",
    slug: "carmen-sola",
    bio: "Con más de 10 años de experiencia, la Dra. Carmen Sola se ha especializado en odontología general y estética.",
    experience: "10+ años",
    education: ["Universidad de Sevilla", "Curso de Estética Dental"],
    specializations: ["Odontología general", "Estética dental"]
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
    name: "Raquel Cisneros", 
    specialty: "Higienista Dental",
    description: "Especialista en la prevención y tratamiento de enfermedades bucales, así como en la promoción de la salud dental.",
    avatar: "/images/equipo/raquel_sola.png",
    initials: "RC",
    aiHint: "professional dentist smiling",
    slug: "raquel-higienista",
    bio: "Con más de 5 años de experiencia, Raquel es nuestra higienista dental dedicada a la prevención y cuidado de la salud bucodental.",
    experience: "5+ años",
    education: ["Técnico Superior en Higiene Bucodental"],
    specializations: ["Higiene dental", "Prevención de enfermedades bucales", "Educación en salud dental"]
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
                  className="object-cover"
                  data-ai-hint={member.aiHint}
                  />
                </div>
                <CardTitle className="font-headline text-xl mt-4">{member.name}</CardTitle>
                <CardDescription className="text-primary font-semibold">{member.specialty}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.description}</p>
                <Button asChild className="mt-4">
                  <Link href={`/equipo/${member.slug}`}>
                  Saber más 
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
