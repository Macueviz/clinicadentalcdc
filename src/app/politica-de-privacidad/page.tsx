import { Card, CardContent, CardHeader, CardTitle } from '@/componentes/ui/card';

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
                De conformidad con lo establecido en el REGLAMENTO (UE) 2016/679 de protección de datos de carácter personal y la
                Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y garantía de los derechos digitales, le informamos que a
                través de este sitio web no se recaban datos de carácter personal de los usuarios sin su conocimiento, ni se ceden a terceros.
              </p>
              <p>
                La web de la que es titular CLINICA DENTAL CUEVAS, SA contiene enlaces a sitios webs de terceros, cuyas políticas de
                privacidad son ajenas a las de CLINICA DENTAL CUEVAS, SA.
              </p>
              <p>
                Al acceder a tales sitios web usted puede decidir si acepta sus políticas de privacidad y de cookies. Con carácter general,
                si navega por internet usted puede aceptar o rechazar las cookies de terceros desde las opciones de configuración de su
                navegador.
              </p>

            <div className="bg-muted p-6 rounded-lg my-8">
              <h2 className="text-xl font-semibold mb-4">Responsable del tratamiento</h2>
                <ul className="space-y-2">
                  <li><strong>Nombre:</strong> CLÍNICA DENTAL CUEVAS</li>
                  <li><strong>Dirección:</strong> Av. de Andalucía, 149, 29740 Torre del Mar, Málaga</li>
                  <li><strong>Teléfono:</strong> +34 669 312 898</li>
                  <li><strong>Email DPD:</strong> info@cdc.es</li>
                </ul>
          </div>
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
              <p>Usted tiene derecho a acceder, corregir o eliminar su información personal. También puede oponerse al procesamiento de su información personal. Para ejercer estos derechos, por favor contáctenos a través de <a href="mailto:info@cdc.com" className="text-primary hover:underline">info@cdc.com</a>.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
