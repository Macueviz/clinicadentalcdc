'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/componentes/ui/button';
import Link from 'next/link';

const BannerPromocion = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const bannerClosed = localStorage.getItem('bannerPromoNavidad2025');
    if (!bannerClosed) {
      setIsVisible(true);
    }
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
    localStorage.setItem('bannerPromoNavidad2025', 'true');
  };

  // Función para resetear el banner (útil para desarrollo)
  const resetBanner = () => {
    localStorage.removeItem('bannerPromoNavidad2025');
    setIsVisible(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-2xl relative overflow-hidden w-full max-w-sm">
        {/* Botón cerrar */}
        <button
          onClick={closeBanner}
          className="absolute top-3 right-3 p-1 hover:bg-black/10 rounded-full transition-colors z-10"
          aria-label="Cerrar banner"
        >
          <X size={20} className="text-gray-600" />
        </button>

        <div className="p-6 text-center">
          {/* Título principal */}
          <h2 className="text-xl font-normal text-gray-800 mb-4">
            ¡Oferta de navidad!
          </h2>

          <p className="text-gray-700 text-sm mb-4">
            Blanqueamiento dental en casa
          </p>

          {/* Precios */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-gray-500">por</span>
              <span className="text-lg line-through text-gray-500">300€</span>
              <span className="text-3xl font-bold text-green-600">180€</span>
            </div>
          </div>

          {/* Botón con Link */}
          <Link href="/contacto" onClick={closeBanner}>
            <Button 
              className="bg-gray-700 hover:bg-gray-800 text-white font-medium px-6 py-2 rounded-full text-sm w-full mb-4"
            >
              PEDIR CITA AHORA →
            </Button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default BannerPromocion;