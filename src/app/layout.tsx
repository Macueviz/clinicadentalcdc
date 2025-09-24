import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/utilidades/utils';
import Cabecera from '@/componentes/Cabecera';
import PiePagina from '@/componentes/PiePagina';
import { Toaster } from '@/componentes/ui/toaster';
import BotonWhatsApp from '@/componentes/BotonWhatsApp';
import BannerCookies from '@/componentes/BannerCookies';

export const metadata: Metadata = {
  title: 'Clínica Dental Cuevas | Implantes y Ortodoncia en Torre del Mar',
  description: 'Tu clínica dental de confianza en Torre del Mar, Málaga. Especialistas en implantes, ortodoncia y estética dental. Más de 15 años cuidando sonrisas.',
  keywords: 'dentista Torre del Mar, clínica dental Málaga, implantes dentales, ortodoncia invisible, estética dental',
  openGraph: {
    title: 'Clínica Dental Cuevas | Tu Dentista de Confianza en Torre del Mar',
    description: 'Especialistas en implantes y ortodoncia en Torre del Mar. Tratamientos personalizados con la última tecnología y trato cercano.',
    url: 'https://www.clinicadentalcdcuevas.com',
    siteName: 'Clínica Dental Cuevas',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-código-de-verificación',
  },
}

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
