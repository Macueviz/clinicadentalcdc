import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import Logo from '../images/logo-peque.png';

const legalItems = [
    { href: '/politica-de-privacidad', label: 'Política de Privacidad' },
    { href: '/politica-de-cookies', label: 'Política de Cookies' },
];

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container max-w-5xl py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start space-y-4">
            <Link href="/">
              <Image
                src={Logo}
                priority
                alt="Clínica Dental Cuevas Logo"
                width={150}
                height={40}
                className="mb-2"
              />
            </Link>
            <p className="text-sm text-muted-foreground">Cuidando de tu sonrisa con profesionalidad y cariño.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/clinicadentalcdcuevas/" aria-label="Instagram" target="_blank" >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-headline font-semibold">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps?q=Av.+de+Andalucía,+149,+29740+Torre+del+Mar,+Málaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Av. de Andalucía, 149, 29740 Torre del Mar, Málaga
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@cdc.com" className="hover:text-primary">info@cdc.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+34669312898" className="hover:text-primary">+34 669 312 898</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold">Horario</h3>
            <div className="mt-2 text-sm text-muted-foreground gap-4">
                <p >Lunes a Viernes: 9:00 - 20:00</p>
                <p className="mt-2">Sábados y Domingos cerrado</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Clínica Dental Cuevas. Todos los derechos reservados.</p>
          <div className="mt-2 flex justify-center gap-4">
            {legalItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
