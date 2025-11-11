import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/utilidades/utils';
import Cabecera from '@/componentes/Cabecera';
import PiePagina from '@/componentes/PiePagina';
import { Toaster } from '@/componentes/ui/toaster';
import BotonWhatsApp from '@/componentes/BotonWhatsApp';
import BannerCookies from '@/componentes/BannerCookies';
import BannerPromocion from '@/componentes/BannerPromocion';

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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        
        {/* Schema Markup para SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Clínica Dental Cuevas",
              "alternateName": "CDC - Clínica Dental Cuevas",
              "description": "Clínica dental especializada en implantes, ortodoncia y estética dental en Torre del Mar, Málaga. Más de 15 años de experiencia cuidando sonrisas.",
              "image": "https://www.clinicadentalcdcuevas.com/images/clinica-dental-cuevas-torre-del-mar.jpg",
              "@id": "https://www.clinicadentalcdcuevas.com",
              "url": "https://www.clinicadentalcdcuevas.com",
              "telephone": "+34669312898",
              "email": "info@clinicadentalcdcuevas.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. de Andalucía, 149",
                "addressLocality": "Torre del Mar",
                "addressRegion": "Málaga",
                "postalCode": "29740",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 36.74079637125684,
                "longitude": -4.097555824211491
              },
              "openingHours": [
                "Mo-Fr 09:00-14:00",
                "Mo-Fr 16:00-20:00",
                "Sat-Sun Closed"
              ],
              "priceRange": "€€",
              "paymentAccepted": "Cash, Credit Card",
              "currenciesAccepted": "EUR",
              "hasMap": "https://goo.gl/maps/ubicacion-clinica-cuevas",
              "areaServed": [
                "Torre del Mar",
                "Vélez-Málaga",
                "Málaga",
                "Rincón de la Victoria",
                "Nerja",
                "Torrox"
              ],
              "medicalSpecialty": [
                "Implantología",
                "Ortodoncia",
                "Estética Dental",
                "Odontología Conservadora",
                "Periodoncia"
              ],
              "sameAs": [
                "https://www.doctoralia.es/clinica-dental-cuevas",
                "https://www.google.com/maps/place/clinica-dental-cuevas",
                "https://www.instagram.com/clinicadentalcdcuevas/"
              ],
              "founder": {
                "@type": "Person",
                "name": "Dr. Javier Cuevas"
              },
              "employee": [
                {
                  "@type": "Person",
                  "name": "Dr. Javier Cuevas",
                  "jobTitle": "Odontólogo especialista en Implantología"
                },
                {
                  "@type": "Person", 
                  "name": "Dra. Raquel",
                  "jobTitle": "Especialista en Implantología y Cirugía Oral"
                }
              ]
            })
          }}
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <BannerPromocion />
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
