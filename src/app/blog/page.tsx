import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '@/lib/blog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Nuestro Blog Dental
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Consejos, novedades y artículos de interés sobre salud bucodental para mantenerte informado y cuidar de tu sonrisa.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`/blog/${post.slug}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full object-cover aspect-video"
                    data-ai-hint={post.imageHint}
                  />
              </Link>
              <CardHeader>
                <CardTitle className="font-headline text-xl leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <Button variant="ghost" size="icon" asChild>
                    <Link href={`/blog/${post.slug}`} aria-label={`Leer más sobre ${post.title}`}>
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
