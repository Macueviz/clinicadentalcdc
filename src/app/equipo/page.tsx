import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dra. Elena García",
    specialty: "Odontología General y Estética",
    description: "Con más de 15 años de experiencia, la Dra. García es experta en diseñar sonrisas y mejorar la salud bucal de sus pacientes.",
    avatar: "https://placehold.co/150x150.png",
    initials: "EG",
    aiHint: "professional woman smiling"
  },
  {
    name: "Dr. Carlos Martínez",
    specialty: "Implantología y Cirugía Oral",
    description: "Especialista en la rehabilitación de sonrisas mediante implantes dentales y cirugía oral avanzada. Su precisión es su mayor virtud.",
    avatar: "https://placehold.co/150x150.png",
    initials: "CM",
    aiHint: "professional man smiling"
  },
  {
    name: "Dra. Sofía Reyes",
    specialty: "Ortodoncia",
    description: "Apasionada por la ortodoncia, la Dra. Reyes ayuda a pacientes de todas las edades a conseguir una sonrisa alineada y funcional.",
    avatar: "https://placehold.co/150x150.png",
    initials: "SR",
    aiHint: "friendly woman smiling"
  },
  {
    name: "Laura Jiménez",
    specialty: "Higienista Dental",
    description: "Laura es nuestra experta en prevención y mantenimiento de la salud de las encías. Su trato amable hace que cada visita sea agradable.",
    avatar: "https://placehold.co/150x150.png",
    initials: "LJ",
    aiHint: "dental hygienist"
  },
];

export default function TeamPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Conoce a Nuestro Equipo
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Profesionales apasionados por la odontología y comprometidos con tu bienestar. En Sonrisa Nova, estás en las mejores manos.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center flex flex-col items-center pt-8 shadow-lg hover:scale-105 transition-transform duration-300">
              <CardHeader className="items-center">
                <Avatar className="w-32 h-32 border-4 border-primary">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
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
