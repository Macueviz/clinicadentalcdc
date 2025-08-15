import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrimeraVisita() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Primera Visita</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            En su primera visita realizaremos un diagnóstico completo y diseñaremos un plan de tratamiento personalizado.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Incluye</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Historia clínica completa</li>
            <li>Exploración bucal</li>
            <li>Radiografías necesarias</li>
            <li>Plan de tratamiento detallado</li>
            <li>Presupuesto sin compromiso</li>
          </ul>
          <Button asChild>
            <Link href="/contacto">Pedir Cita</Link>
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/images/primera-visita.jpg"
            alt="Primera Visita"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
