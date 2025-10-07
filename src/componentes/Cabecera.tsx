"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Calendar } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/componentes/ui/dropdown-menu";

import { Button } from '@/componentes/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/componentes/ui/sheet';
import { cn } from '@/utilidades/utils';
import Image from 'next/image';
import Logo from "../imagenes/logo-peque.png";

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
      { href: '/tratamientos/odontologia-conservadora', label: 'Odontología Conservadora' },
      //{ href: '/tratamientos/periodoncia', label: 'Periodoncia' },
      { 
        href: '#', 
        label: 'Recomendaciones Post-Tratamiento',
        subsubmenu: [
          { href: '/recomendaciones-post-tratamiento/limpieza-dental', label: 'Limpieza Dental' },
          { href: '/recomendaciones-post-tratamiento/carillas-composite', label: 'Carillas de Composite' },
          { href: '/recomendaciones-post-tratamiento/cuidados-post-extraccion', label: 'Cuidados Post-Extracción' },
          { href: '/recomendaciones-post-tratamiento/cirugia-implantes', label: 'Cirugía de Implantes' },
          { href: '/recomendaciones-post-tratamiento/higiene-protesis', label: 'Higiene de Prótesis Removible' },
          { href: '/recomendaciones-post-tratamiento/blanqueamiento-casa', label: 'Blanqueamiento en Casa' },
        ]
      },
    ]
  },
  { href: '/equipo', label: 'Equipo' },
  //{ href: '/casos', label: 'Casos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' }
];

export default function Cabecera() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleSubmenu = (href: string) => {
    setExpandedItems(prev => 
      prev.includes(href) 
        ? prev.filter(item => item !== href)
        : [...prev, href]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearAutoCloseTimer(); // Limpiar timer al desmontar
    };
  }, []);

  // Cerrar dropdown cuando se hace click fuera o se cambia de página
  useEffect(() => {
    const handleClickOutside = () => {
      closeDropdown();
    };
    
    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openDropdown]);

  // Función para limpiar el timer
  const clearAutoCloseTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Función para iniciar el timer de cierre automático
  const startAutoCloseTimer = () => {
    clearAutoCloseTimer();
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 5000); // 5 segundos
  };

  // Función para cerrar el dropdown
  const closeDropdown = () => {
    clearAutoCloseTimer();
    setOpenDropdown(null);
  };

  // Función para abrir el dropdown
  const openDropdownMenu = (href: string) => {
    clearAutoCloseTimer();
    setOpenDropdown(href);
    startAutoCloseTimer();
  };

  const NavLink = ({ href, label, submenu, className }: { 
    href: string; 
    label: string; 
    submenu?: Array<{href: string, label: string, subsubmenu?: Array<{href: string, label: string}>}>; 
    className?: string 
  }) => {
    if (submenu) {
      return (
        <DropdownMenu 
          open={openDropdown === href} 
          onOpenChange={(isOpen) => {
            if (isOpen) {
              openDropdownMenu(href);
            } else {
              closeDropdown();
            }
          }}
        >
          <DropdownMenuTrigger asChild>
            <div
              ref={dropdownRef}
              className={cn(
                'flex items-center gap-1 text-m font-medium transition-colors hover:text-primary px-3 py-2 rounded-md cursor-pointer',
                pathname.startsWith(href) ? 'text-primary' : 'text-foreground',
                className
              )}
              onMouseEnter={() => {
                // Solo abrir en hover si estamos en desktop (>= 1024px)
                if (window.innerWidth >= 1024) {
                  openDropdownMenu(href);
                }
              }}
              onMouseLeave={() => {
                // Cerrar con un delay para evitar intermitencia
                if (window.innerWidth >= 1024) {
                  setTimeout(() => {
                    // Verificar si el mouse está fuera del área del dropdown
                    const dropdownElement = document.querySelector('[data-radix-popper-content-wrapper]');
                    const triggerElement = dropdownRef.current;
                    
                    if (!dropdownElement?.matches(':hover') && !triggerElement?.matches(':hover')) {
                      closeDropdown();
                    }
                  }, 150);
                }
              }}
            >
              {label} <ChevronDown className="h-4 w-4 ml-1" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="bg-background mt-1 min-w-[220px]"
            onMouseEnter={() => {
              // Mantener abierto y reiniciar timer si el mouse está sobre el dropdown
              if (window.innerWidth >= 1024) {
                clearAutoCloseTimer();
                setOpenDropdown(href);
              }
            }}
            onMouseLeave={() => {
              // Cerrar inmediatamente cuando el mouse sale del dropdown
              if (window.innerWidth >= 1024) {
                setTimeout(() => {
                  const triggerElement = dropdownRef.current;
                  if (!triggerElement?.matches(':hover')) {
                    closeDropdown();
                  }
                }, 100);
              }
            }}
          >
            {submenu.map((item) => (
              item.subsubmenu ? (
                <DropdownMenuSub key={item.href}>
                  <DropdownMenuSubTrigger className="flex items-center">
                    <span>{item.label}</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="ml-2">
                    {item.subsubmenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.href}>
                        <Link 
                          href={subItem.href} 
                          className="w-full text-foreground hover:text-primary transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              ) : (
                <DropdownMenuItem key={item.href}>
                  <Link 
                    href={item.href} 
                    className="w-full text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              )
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
          pathname === href ? 'text-primary' : 'text-foreground',
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
      <div className="container hidden lg:flex h-24 items-center justify-center px-4">
        <Link href="/" className="mr-2">
          <Image
            src={Logo}
            alt="Clínica Dental Cuevas Logo"
            className="h-20 w-auto"
          />
        </Link>
        
        <nav className="flex items-center gap-4 flex-grow max-w-6xl">
          <div className="flex items-center gap-6 justify-center w-full">
            {navItems.map((item) => (
              item.submenu ? (
                <NavLink key={item.href} {...item} />
              ) : (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className="text-m font-medium transition-colors hover:text-primary text-foreground"
                  onMouseEnter={() => {
                    // Cerrar dropdown cuando se hace hover sobre otros elementos
                    if (window.innerWidth >= 1024) {
                      closeDropdown();
                    }
                  }}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
          
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex flex-col items-end min-w-[180px]">
              <span className="text-sm font-medium mb-1">Llámanos</span>
              <a href="tel:+34669312898" className="flex items-center gap-2 text-base font-bold hover:text-primary whitespace-nowrap">
                <Phone className="h-4 w-4" />
                <span>+34 669 312 898</span>
              </a>
            </div>
            <Button asChild className="rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap">
              <Link href="/contacto">Pedir cita</Link>
            </Button>
          </div>
        </nav>
      </div>

      {/* Tablet/Mobile Header */}
      <div className="container lg:hidden">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              alt="Clínica Dental Cuevas Logo"
              className="h-10 w-auto"
            />
          </Link>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="min-w-[80px]">
              <a href="tel:+34669312898" className="flex flex-col items-center">
                <Phone className="h-4 w-4 text-foreground mb-1" />
                <span className="text-xs text-foreground font-medium">Llamar</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="min-w-[80px]">
              <Link href="/contacto" className="flex flex-col items-center">
                <Calendar className="h-4 w-4 text-foreground mb-1" />
                <span className="text-xs text-foreground font-medium">Pedir cita</span>
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
                      src={Logo}
                      alt="Clínica Dental Cuevas Logo"
                      className="h-8 w-auto"
                    />
                  </div>
                  <nav className="flex-1 overflow-y-auto">
                    <div className="flex flex-col py-4">
                      {navItems.map((item) => (
                        <div key={item.href} className="border-b border-border/50 last:border-none">
                          {item.submenu ? (
                            <>
                              <button
                                onClick={() => toggleSubmenu(item.href)}
                                className="flex items-center justify-between w-full p-4 text-base hover:text-primary"
                              >
                                {item.label}
                                <ChevronDown className={cn(
                                  "h-4 w-4 transition-transform duration-200",
                                  expandedItems.includes(item.href) ? "rotate-180" : ""
                                )} />
                              </button>
                              {expandedItems.includes(item.href) && (
                                <div className="bg-muted/50 pl-6">
                                  {item.submenu.map((subItem) => (
                                    subItem.subsubmenu ? (
                                      <div key={subItem.href}>
                                        <button
                                          onClick={() => toggleSubmenu(`${item.href}-${subItem.href}`)}
                                          className="flex items-center justify-between w-full p-3 text-sm text-muted-foreground hover:text-primary"
                                        >
                                          {subItem.label}
                                          <ChevronDown className={cn(
                                            "h-3 w-3 transition-transform duration-200",
                                            expandedItems.includes(`${item.href}-${subItem.href}`) ? "rotate-180" : ""
                                          )} />
                                        </button>
                                        {expandedItems.includes(`${item.href}-${subItem.href}`) && (
                                          <div className="bg-muted/70 pl-8">
                                            {subItem.subsubmenu.map((subSubItem) => (
                                              <Link
                                                key={subSubItem.href}
                                                href={subSubItem.href}
                                                className="block p-2 text-sm text-muted-foreground hover:text-primary"
                                                onClick={() => {
                                                  setIsMobileMenuOpen(false);
                                                  setExpandedItems([]);
                                                }}
                                              >
                                                {subSubItem.label}
                                              </Link>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    ) : (
                                      <Link
                                        key={subItem.href}
                                        href={subItem.href}
                                        className="block p-3 text-base text-muted-foreground hover:text-primary"
                                        onClick={() => {
                                          setIsMobileMenuOpen(false);
                                          setExpandedItems([]);
                                        }}
                                      >
                                        {subItem.label}
                                      </Link>
                                    )
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={item.href}
                              className="block p-4 text-base hover:text-primary"
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
                    <Button asChild className="w-full max-w-[200px] mb-4">
                      <Link href="/contacto">Pedir Cita</Link>
                    </Button>
                    <span className="text-sm font-medium mb-1">Llámanos</span>
                    <a href="tel:+34669312898" className="flex items-center justify-center gap-2 text-base font-bold hover:text-primary">
                      <Phone className="h-4 w-4" />
                      +34 669 312 898
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
