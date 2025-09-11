import { notFound } from 'next/navigation';
import Image from 'next/image';
import { obtenerArticuloPorSlug, obtenerArticulos } from '@/utilidades/blog';

export async function generateStaticParams() {
  const articulos = obtenerArticulos();
  return (await articulos).map((articulo) => ({
    slug: articulo.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const articulo = await obtenerArticuloPorSlug(params.slug);
  if (!articulo) {
    return {
      title: 'Artículo no encontrado',
    };
  }
  return {
    title: `${articulo.title} | Clínica Dental Cuevas`,
    description: articulo.description,
  };
}

export default async function PaginaArticulo({ params }: { params: { slug: string } }) {
  const articulo = await obtenerArticuloPorSlug(params.slug);

  if (!articulo) {
    notFound();
  }

  return (
    <article className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              {articulo.title}
            </h1>
            <div className="mt-4 text-sm text-muted-foreground">
              <span>Por {articulo.author}</span> &middot; <span>{new Date(articulo.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </header>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image
              src={articulo.image}
              alt={articulo.title}
              fill
              className="object-cover"
              data-ai-hint={articulo.imageHint}
            />
          </div>
          
          <div
            className="prose prose-lg dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:font-headline prose-headings:text-foreground"
            dangerouslySetInnerHTML={{ __html: articulo.content }}
          />
        </div>
      </div>
    </article>
  );
}
