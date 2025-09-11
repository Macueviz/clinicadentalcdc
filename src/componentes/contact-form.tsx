"use client";

import { useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

import { Button } from "@/componentes/ui/button";
import { Input } from "@/componentes/ui/input";
import { Textarea } from "@/componentes/ui/textarea";
import { Checkbox } from "@/componentes/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/componentes/ui/form";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type FormState } from "@/app/actions";

const contactSchema = z.object({
  name: z.string().min(2, { message: "El nombre es requerido." }),
  email: z.string().email({ message: "Email inválido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la política de privacidad.",
  }),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      disabled={pending}
      className="px-8 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
    >
      {pending ? "Enviando..." : "Enviar"}
    </Button>
  );
}

export default function ContactForm() {
  const { toast } = useToast();
  const initialState: FormState = { message: "", status: "idle" };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "¡Éxito!",
        description: state.message,
      });
      form.reset();
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);
  
  return (
    <Form {...form}>
      <form action={formAction} className="space-y-5">
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
          <SubmitButton />
        </div>
      </form>
    </Form>
  );
}
