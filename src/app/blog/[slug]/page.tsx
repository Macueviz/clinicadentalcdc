import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPostBySlug, getPosts } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = getPosts();
  return (await posts).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(params: { slug: string }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post no encontrado',
    };  
  }
  return {
    title: `${post.title} | Sonrisa Nova`,
    description: post.description,
  };
}

export default async function BlogPostPage( params: { slug:string } ) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              {post.title}
            </h1>
            <div className="mt-4 text-sm text-muted-foreground">
              <span>Por {post.author}</span> &middot; <span>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </header>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.imageHint}
            />
          </div>
          
          <div
            className="prose prose-lg dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:font-headline prose-headings:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  );
}
