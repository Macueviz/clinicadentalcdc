import { Avatar, AvatarFallback, AvatarImage } from "@/componentes/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/componentes/ui/card";

const teamMembers = [
  {
    name: "Dr. Javier Cuevas",
    specialty: "Odontología General y Estética",
    description: "Con más de 15 años de experiencia, el Dr. Cuevas es experto en diseñar sonrisas y mejorar la salud bucal de sus pacientes.",
    avatar: "https://placehold.co/150x150.png",
    initials: "JC",
    aiHint: "professional man smiling"
  },
  {
    name: "Asier Argote",
    specialty: "Implantología y Cirugía Oral",
    description: "Especialista en la rehabilitación de sonrisas mediante implantes dentales y cirugía oral avanzada. Su precisión es su mayor virtud.",
    avatar: "https://placehold.co/150x150.png",
    initials: "CM",
    aiHint: "professional man smiling"
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
