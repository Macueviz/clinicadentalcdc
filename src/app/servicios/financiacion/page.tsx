import { Button } from "@/componentes/ui/button";
import Link from "next/link";

export default function Financiacion() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Financiación</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            Ofrecemos diversas opciones de financiación para hacer más accesibles nuestros tratamientos.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Ventajas</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Planes personalizados</li>
            <li>Hasta 48 meses</li>
            <li>Sin entrada inicial</li>
            <li>Trámites sencillos</li>
            <li>Respuesta rápida</li>
          </ul>
          <Button asChild>
            <Link href="/contacto">Consultar Opciones</Link>
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/images/financiacion.jpg"
            alt="Financiación"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
