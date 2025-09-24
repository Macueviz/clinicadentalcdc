"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import emailjs from "emailjs-com";

import { Button } from "@/componentes/ui/button";
import { Input } from "@/componentes/ui/input";
import { Textarea } from "@/componentes/ui/textarea";
import { Checkbox } from "@/componentes/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/componentes/ui/form";
import { useToast } from "@/hooks/use-toast";

// ⚠️ REEMPLAZA con tus credenciales de EmailJS
const SERVICE_ID = "service_s6mzomi";
const TEMPLATE_ID = "template_nnfijjl";
const PUBLIC_KEY = "xhXGERlFoUMjSRL0e";

const contactSchema = z.object({
  name: z.string().min(2, { message: "El nombre es requerido." }),
  email: z.string().email({ message: "Email inválido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la política de privacidad.",
  }),
});

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      privacy: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        PUBLIC_KEY
      );

      toast({
        title: "¡Éxito!",
        description: "Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.",
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Nombre</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Tu nombre completo" 
                    {...field} 
                    className="rounded-lg border-muted-foreground/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="tu.email@ejemplo.com" 
                    {...field}
                    className="rounded-lg border-muted-foreground/20" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Mensaje</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="¿En qué podemos ayudarte?" 
                  rows={4} 
                  {...field}
                  className="rounded-lg border-muted-foreground/20 resize-none" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal">
                  He leído y acepto la{" "}
                  <Link href="/politica-de-privacidad" className="text-primary hover:underline">
                    Política de privacidad
                  </Link>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <div className="flex justify-center mt-6">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="px-8 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
