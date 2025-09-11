import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/utilidades/utils';
import Cabecera from '@/componentes/Cabecera';
import PiePagina from '@/componentes/PiePagina';
import { Toaster } from '@/componentes/ui/toaster';
import BotonWhatsApp from '@/componentes/BotonWhatsApp';
import BannerCookies from '@/componentes/BannerCookies';

export const metadata: Metadata = {
  title: 'Clinica Dental Cuevas',
  description: 'Clínica dental moderna y profesional. Ofrecemos una amplia gama de tratamientos para cuidar de tu sonrisa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <div className="relative flex min-h-screen flex-col">
          <Cabecera />
          <main className="flex-1">{children}</main>
          <PiePagina />
        </div>
        <BotonWhatsApp />
        <BannerCookies />
        <Toaster />
      </body>
    </html>
  );
}
