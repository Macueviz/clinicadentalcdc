"use client";

import { useState } from "react";
import { Button } from "@/componentes/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/componentes/ui/card";
import { CheckCircle, Users, Smile, SmilePlus, Bot, Send } from "lucide-react";
import Image from "next/image";
import portadaPaciente from "../../public/images/pacientes/portada_paciente2.jpeg";
import iconBraquets from "../../public/images/iconBraquets.png";
import iconImplante from "../../public/images/iconImplante.png";
import iconSonrisa from "../../public/images/iconSonrisa.png";
import iconDienteSonrisa from "../../public/images/iconDienteSonrisa2.png";
import tacPequeño from "../../public/images/tac_peque.png";
import Link from "next/link";
import { Input } from "@/componentes/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/componentes/ui/alert";

/*function AIAssistant() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse("");
    const res = await fetch('/api/ai-assistant', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ prompt }) });
    const data = await res.json();
    setResponse(data.response);
    setIsLoading(false);
  };

  return (
    <Card className="bg-background shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-2xl">
          <Bot className="h-6 w-6 text-primary" /> Asistente Virtual
        </CardTitle>
        <CardDescription>¿Tienes una pregunta rápida? Nuestro asistente te puede ayudar.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ej: ¿Qué es una carilla dental?"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
        {isLoading && <p className="text-muted-foreground text-sm">Pensando...</p>}
        {response && (
          <Alert>
            <AlertTitle>Respuesta:</AlertTitle>
            <AlertDescription className="whitespace-pre-wrap">{response}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}*/

const treatments = [
  {
    name: "Implantes dentales",
    description: "Reemplazamos dientes perdidos con implantes de titanio que se integran con tu hueso, ofreciendo una solución duradera y de aspecto natural.",
    icon: (
      <Image
        src={iconImplante}
        alt="Implantes Dentales"
        className="h-16 w-16"
      />
    ),
    href: "/tratamientos/implantes"
  },
  {
    name: "Ortodoncia",
    description: "Corregimos la alineación de tus dientes y la mordida con brackets tradicionales o alineadores invisibles para una sonrisa perfecta y funcional.",
    icon: (
      <Image
        src={iconBraquets}
        alt="Ortodoncia"
        className="h-16 w-20"
      />
    ),
    href: "/tratamientos/ortodoncia",
  },
  {
    name: "Estética dental",
    description: "Mejoramos la apariencia de tu sonrisa con tratamientos como blanqueamiento dental, carillas de porcelana y contorneado estético.",
    icon: (
      <Image
          src={iconSonrisa}
          alt="Ortodoncia"
          className="h-16 w-20"
        />
    ),
    href: "/tratamientos/estetica-dental",
  },
  {
    name: "Odontología conservadora",
    description: "Tratamos las caries y problemas dentales de manera mínimamente invasiva para preservar al máximo la estructura dental natural.",
    icon: (
      <Image
          src={iconDienteSonrisa}
          alt="Ortodoncia"
          className="h-16 w-20"
        />
    ),
    href: "/tratamientos/odontologia-conservadora",
  }
];

export default function Home() {
  return (

    <div className="flex flex-col">
                 {/* Seccion Portada */}
      <section className="relative h-[70vh] md:h-[90vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src={portadaPaciente}
          alt="Interior de Clínica Dental Cuevas en Torre del Mar - Instalaciones modernas y acogedoras"
          priority
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          className="z-2"
        />
        <div className="relative z-10 container px-4 md:px-6">
          <h1 className="text-xl md:text-6xl font-bold font-headline tracking-tight">
            Tu dentista de confianza en Torre del Mar
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
            Más de 15 años de experiencia cuidando sonrisas en Málaga.
            <br />
            Especialistas en implantes dentales, ortodoncia y estética dental con tecnología de vanguardia.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contacto">Pide tu primera consulta GRATIS</Link>
            </Button>
          </div>
        </div>
      </section>

                {/* Seccion Información */}

      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary-foreground">
                Bienvenidos a Clínica Dental Cuevas
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Somos una clínica dental dedicada a proporcionar un cuidado bucodental integral y de máxima calidad. Nuestro equipo de especialistas se compromete a ayudarte a conseguir y mantener una sonrisa sana y bonita para toda la vida.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><span className="font-bold">Tecnología avanzada:</span> Equipamiento de última generación para diagnósticos precisos y tratamientos eficaces.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><span className="font-bold">Equipo experto:</span> Profesionales altamente cualificados y en constante formación.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><span className="font-bold">Atención personalizada:</span> Nos enfocamos en tus necesidades para ofrecerte un plan de tratamiento a tu medida.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl bg-black/50">
              <Image
                src={tacPequeño}
                alt="Doctor mostrando Tac"
                width={600}
                height={500}
                data-ai-hint="friendly dentist"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

                {/* Seccion Tratamientos */}

      <section id="treatments" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Tratamientos destacados</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Ofrecemos una amplia gama de servicios para cubrir todas tus necesidades dentales.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <Link href={treatment.href} key={treatment.name} className="block h-full">
                <Card className="text-center p-6 flex flex-col items-center bg-background transform hover:scale-105 transition-transform duration-300 shadow-lg h-full">
                  <CardContent className="flex flex-col items-center gap-4">
                    <div className="text-primary">{treatment.icon}</div>
                    <CardTitle className="font-headline text-2xl">{treatment.name}</CardTitle>
                    <CardDescription>{treatment.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/*<section id="ai-assistant" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <AIAssistant />
        </div>
      </section>*/}
    </div>
  );
}
