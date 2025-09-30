import ContactForm from '@/componentes/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        {/* Titulo y descripcion */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Contacta con Nosotros
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tienes alguna pregunta o quieres pedir una cita? Rellena el formulario o utiliza nuestros datos de contacto. Estaremos encantados de atenderte.
          </p>
        </div>

        {/* Formulario e Información en dos columnas */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Formulario - 2 columnas de ancho */}  
          <div className="md:col-span-2 bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-headline font-bold mb-4">Pide tu cita</h2>
            <ContactForm />
          </div>
          
          {/* Información de contacto - 1 columna de ancho */} 
          <div className="md:col-span-1 bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-headline font-bold mb-4">Información de contacto</h2>
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-2 flex-shrink-0" />
                <div>
                  <h2 className="font-semibold text-foreground">Dirección</h2>
                  <p className="text-sm">Av. de Andalucía, 149, 29740 Torre del Mar, Málaga</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="font-semibold text-foreground">Teléfono</h2>
                  <a href="tel:+34669312898" className="hover:text-primary transition-colors text-sm">+34 669 312 898</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="font-semibold text-foreground">Email</h2>
                  <a href="mailto:info@clinicadentalcdcuevas.com" className="hover:text-primary transition-colors text-sm">info@clinicadentalcdcuevas.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ubicación - Ancho completo */} 
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-headline font-bold mb-6">Encuéntranos en Torre del Mar</h2>
          <div className="rounded-lg overflow-hidden aspect-video shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.0461811431027!2d-4.097555824211491!3d36.74079637125684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72535e724024c3%3A0x5a6f8ae01c7f808e!2sAv.%20de%20Andaluc%C3%ADa%2C%20149%2C%2029740%20Torre%20del%20Mar%2C%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1703171632799!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Clínica Dental Cuevas en Torre del Mar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
