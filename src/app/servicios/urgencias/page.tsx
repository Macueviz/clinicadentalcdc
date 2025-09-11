import { Button } from "@/componentes/ui/button";
import Link from "next/link";

export default function UrgenciasDentales() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Urgencias Dentales</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            Ofrecemos atención de urgencias dentales para casos que requieren atención inmediata.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Casos que atendemos</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Dolor dental agudo</li>
            <li>Traumatismos dentales</li>
            <li>Inflamación severa</li>
            <li>Pérdida de empastes o coronas</li>
          </ul>
          <div className="space-y-4">
            <Button asChild>
              <Link href="/contacto">Contactar</Link>
            </Button>
            <p className="text-lg font-semibold">
              Teléfono de urgencias: +34 669 312 898
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/images/urgencias-dentales.jpg"
            alt="Urgencias Dentales"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
