import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CookiePolicyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              Política de Cookies
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <Card className="mt-12 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">¿Qué son las cookies?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, etc.
              </p>
               <p className="font-bold text-foreground">
                IMPORTANTE: Este es un texto de ejemplo. Debe detallar qué cookies específicas utiliza su sitio web y para qué fines.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Cookies utilizadas en este sitio web</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible.</p>
              <p>Este sitio web utiliza las siguientes <strong>cookies propias</strong>:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>cookie_consent:</strong> Almacena el consentimiento del usuario sobre el uso de cookies en el sitio web. Es una cookie técnica y necesaria para recordar no volver a mostrarle el banner de cookies.
                </li>
              </ul>
               <p>Este sitio web utiliza las siguientes <strong>cookies de terceros</strong>:</p>
               <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Google Maps:</strong> Utilizada para mostrar el mapa de ubicación en la página de contacto. Puede recopilar datos de geolocalización de forma anónima.
                </li>
              </ul>
            </CardContent>
          </Card>

           <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Desactivación o eliminación de cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando. Le recomendamos consultar la ayuda de su navegador para gestionar las cookies.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
