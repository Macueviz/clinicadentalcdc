import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Periodoncia() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Periodoncia</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            Tratamos las enfermedades de las encías y los tejidos que sostienen los dientes, previniendo y curando la periodontitis.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Servicios</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Limpieza profunda</li>
            <li>Tratamiento de gingivitis</li>
            <li>Cirugía periodontal</li>
            <li>Mantenimiento periodontal</li>
          </ul>
          <Button asChild>
            <Link href="/contacto">Solicitar Consulta</Link>
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/images/periodoncia.jpg"
            alt="Periodoncia"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
