"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t shadow-md animate-in slide-in-from-bottom-full"
    )}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra{' '}
          <Link href="/politica-de-cookies" className="underline hover:text-primary">
            Política de Cookies
          </Link>.
        </p>
        <Button onClick={handleAccept} size="sm">Aceptar</Button>
      </div>
    </div>
  );
}
