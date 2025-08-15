"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export type FormState = {
  message: string;
  status: "success" | "error" | "idle";
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.errors.map((e) => e.message).join(", "),
      status: "error",
    };
  }
  
  // Here you would typically send an email using a service like Resend, Nodemailer, or EmailJS.
  // For this example, we'll just simulate a successful submission.
  console.log("Form data submitted:", validatedFields.data);

  return {
    message: "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.",
    status: "success",
  };
}
