import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/componentes/ui/card';
import { Separator } from '@/componentes/ui/separator';

const cases = [
  {
    title: "Blanqueamiento Dental",
    before: { src: "https://placehold.co/400x300.png", alt: "Dientes antes del blanqueamiento", hint: "yellowed teeth smile" },
    after: { src: "https://placehold.co/400x300.png", alt: "Dientes después del blanqueamiento", hint: "white teeth smile" },
  },
  {
    title: "Implantes y Coronas",
    before: { src: "https://placehold.co/400x300.png", alt: "Sonrisa con dientes ausentes", hint: "missing tooth smile" },
    after: { src: "https://placehold.co/400x300.png", alt: "Sonrisa completa con implantes", hint: "perfect smile" },
  },
  {
    title: "Ortodoncia Invisible",
    before: { src: "https://placehold.co/400x300.png", alt: "Dientes desalineados", hint: "crooked teeth" },
    after: { src: "https://placehold.co/400x300.png", alt: "Dientes alineados tras ortodoncia", hint: "straight teeth" },
  },
  {
    title: "Carillas de Porcelana",
    before: { src: "https://placehold.co/400x300.png", alt: "Dientes con imperfecciones", hint: "chipped tooth smile" },
    after: { src: "https://placehold.co/400x300.png", alt: "Sonrisa perfecta con carillas", hint: "hollywood smile" },
  },
];

export default function CasesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Casos de Éxito
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Una imagen vale más que mil palabras. Aquí puedes ver algunos de los resultados que hemos conseguido para nuestros pacientes. Tu sonrisa es nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((caseItem) => (
            <Card key={caseItem.title} className="shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-center">{caseItem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div className="text-center">
                    <h3 className="font-bold mb-2">Antes</h3>
                    <Image
                      src={caseItem.before.src}
                      alt={caseItem.before.alt}
                      width={400}
                      height={300}
                      className="rounded-lg w-full object-cover aspect-[4/3]"
                      data-ai-hint={caseItem.before.hint}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold mb-2">Después</h3>
                    <Image
                      src={caseItem.after.src}
                      alt={caseItem.after.alt}
                      width={400}
                      height={300}
                      className="rounded-lg w-full object-cover aspect-[4/3]"
                      data-ai-hint={caseItem.after.hint}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
