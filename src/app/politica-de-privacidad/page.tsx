import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              Política de Privacidad
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <Card className="mt-12 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Introducción</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Bienvenido a Sonrisa Nova. Su privacidad es de suma importancia para nosotros. Esta Política de Privacidad describe cómo recopilamos, usamos, procesamos y divulgamos su información, incluida la información personal, en conjunto con su acceso y uso de nuestro sitio web.
              </p>
              <p className="font-bold text-foreground">
                IMPORTANTE: Este es un texto de ejemplo. Debe consultar con un asesor legal para asegurarse de que su Política de Privacidad cumple con todas las leyes y regulaciones aplicables, como el GDPR.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">1. Información que Recopilamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Recopilamos información que usted nos proporciona directamente cuando utiliza nuestro formulario de contacto, como su nombre, dirección de correo electrónico y el contenido de su mensaje. También podemos recopilar información automáticamente a través de cookies y tecnologías similares para entender cómo interactúa con nuestro sitio web.</p>
            </CardContent>
          </Card>

          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">2. Cómo Usamos su Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Responder a sus consultas y solicitudes de citas.</li>
                <li>Mejorar y optimizar nuestro sitio web y servicios.</li>
                <li>Cumplir con nuestras obligaciones legales.</li>
                <li>Enviar comunicaciones de marketing, si ha dado su consentimiento.</li>
              </ul>
            </CardContent>
          </Card>

           <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">3. Sus Derechos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Usted tiene derecho a acceder, corregir o eliminar su información personal. También puede oponerse al procesamiento de su información personal. Para ejercer estos derechos, por favor contáctenos a través de <a href="mailto:info@sonrisanova.com" className="text-primary hover:underline">info@sonrisanova.com</a>.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
