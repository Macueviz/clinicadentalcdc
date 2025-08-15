import ContactForm from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Contacta con Nosotros
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tienes alguna pregunta o quieres pedir una cita? Rellena el formulario o utiliza nuestros datos de contacto. Estaremos encantados de atenderte.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-headline font-bold mb-6">Información de Contacto</h2>
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Dirección</h3>
                  <p>Calle Ficticia 123, 28080 Madrid, España</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Teléfono</h3>
                  <a href="tel:+34912345678" className="hover:text-primary transition-colors">+34 912 345 678</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:info@sonrisanova.com" className="hover:text-primary transition-colors">info@sonrisanova.com</a>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden aspect-video shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.64949944203!2d-3.703790184592475!3d40.4167753793649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422880a98380c9%3A0xad4b3f6a627c244d!2sPuerta%20del%20Sol!5e0!3m2!1ses!2ses!4v1620054705599!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Sonrisa Nova"
              ></iframe>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-headline font-bold mb-6">Pide tu Cita</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
