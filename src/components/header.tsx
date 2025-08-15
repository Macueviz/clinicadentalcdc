"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Calendar } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navItems = [
  { 
    href: '/', 
    label: 'Inicio' 
  },
  {
    href: '/tratamientos',
    label: 'Tratamientos',
    submenu: [
      { href: '/tratamientos/implantes', label: 'Implantes Dentales' },
      { href: '/tratamientos/ortodoncia', label: 'Ortodoncia' },
      { href: '/tratamientos/estetica-dental', label: 'Estética Dental' },
      { href: '/tratamientos/periodoncia', label: 'Periodoncia' },
    ]
  },
  {
    href: '/servicios',
    label: 'Servicios',
    submenu: [
      { href: '/servicios/primera-visita', label: 'Primera Visita' },
      { href: '/servicios/urgencias', label: 'Urgencias Dentales' },
      { href: '/servicios/financiacion', label: 'Financiación' },
    ]
  },
  { href: '/equipo', label: 'Equipo' },
  { href: '/casos', label: 'Casos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, submenu, className }: { 
    href: string; 
    label: string; 
    submenu?: Array<{href: string, label: string}>; 
    className?: string 
  }) => {
    if (submenu) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className={cn(
            'flex items-center gap-1 text-m font-medium transition-colors hover:text-primary',
            pathname.startsWith(href) ? 'text-primary' : 'text-foreground/80',
            className
          )}>
            {label} <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {submenu.map((item) => (
              <DropdownMenuItem key={item.href}>
                <Link href={item.href} className="w-full">
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

    return (
      <Link
        href={href}
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
          'text-m font-medium transition-colors hover:text-primary',
          pathname === href ? 'text-primary text-lg font-bold' : 'text-foreground/80',
          className
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all',
        isScrolled ? 'border-border bg-background/95 backdrop-blur' : 'border-transparent bg-background'
      )}
    >
      {/* Desktop Header */}
      <div className="container hidden md:flex h-16 items-center">
        <Link href="/" className="mr-6">
          <Image
            src="/images/logo peque.png"
            alt="Clínica Dental Cuevas Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        
        <nav className="flex items-center gap-6 flex-grow">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              item.submenu ? (
                <NavLink key={item.href} {...item} />
              ) : (
                <Link key={item.href} href={item.href} className="text-m font-medium transition-colors hover:text-primary">
                  {item.label}
                </Link>
              )
            ))}
          </div>
          
          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-medium hidden min-[949px]:block">Llámanos y pide cita</span>
              <span className="text-sm underline underline-offset-2 font-medium block min-[949px]:hidden max-[760px]:hidden">Llámanos</span>
              <a href="tel:+34610719058" className="flex items-center gap-2 text-sm font-medium hover:text-primary">
                <Phone className="h-4 w-4 mr-5" />
                <span className="hidden min-[950px]:block">+34 610 719 058</span>
              </a>
            </div>
            <Button asChild className="hidden md:flex">
              <Link href="/contacto">Pedir Cita</Link>
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="container md:hidden">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo peque.png"
              alt="Clínica Dental Cuevas Logo"
              width={120}
              height={30}
              className="h-10 w-auto"
            />
          </Link>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+34610719058" className="flex flex-col items-center">
              <Phone className="h-3 w-3 text-foreground" />
              <span className="text-xs text-foreground">Llamar</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/pedir-cita" className="flex flex-col items-center">
              <Calendar className="h-3 w-3 text-foreground" />
              <span className="text-xs text-foreground">Pedir cita</span>
              </Link>
            </Button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-8 w-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <div className="flex flex-col h-full">
                  <div className="border-b p-4">
                    <Image
                      src="/images/logo peque.png"
                      alt="Clínica Dental Cuevas Logo"
                      width={140}
                      height={35}
                      className="h-8 w-auto"
                    />
                  </div>
                  <nav className="flex-1 overflow-y-auto">
                    <div className="flex flex-col py-4">
                      {navItems.map((item) => (
                        <div key={item.href} className="border-b border-border/50 last:border-none">
                          {item.submenu ? (
                            <button
                              onClick={() => {/* Toggle submenu */}}
                              className="flex items-center justify-between w-full p-4 text-base"
                            >
                              {item.label}
                              <ChevronDown className="h-4 w-4" />
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              className="block p-4 text-base"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </nav>
                  <div className="border-t p-4 flex flex-col items-center text-center">
                    <Button asChild className="w-full max-w-[200px]">
                      <Link href="/pedir-cita">Pedir Cita</Link>
                    </Button>
                    <a href="tel:+34610719058" className="flex items-center justify-center gap-2 mt-4 text-sm">
                      <Phone className="h-4 w-4" />
                      +34 610 719 058
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
