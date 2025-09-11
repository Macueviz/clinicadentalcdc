import { Card, CardContent, CardHeader, CardTitle } from '@/componentes/ui/card';

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
                Una cookie es un pequeño archivo de texto que se almacena en tu navegador (Firefox, Chrome, Edge, etc.) cuando visitas casi cualquier página web. Su función es permitir que el sitio web recuerde tu visita cuando vuelvas a navegar por esa página. Las cookies suelen almacenar información técnica, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc.
              </p>
              <p className="font-bold text-foreground">
                El objetivo de la cookie es adaptar el contenido de la web a tu perfil y necesidades. Sin cookies, los servicios ofrecidos por cualquier página se verían mermados significativamente.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Tipos de Cookies que usamos y su Finalidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Dependiendo de la finalidad para la que se traten los datos obtenidos a través de las cookies, podemos distinguir entre:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Cookies Técnicas o Funcionales:</strong> Son las estrictamente necesarias para el correcto funcionamiento de la web. Permiten la navegación del usuario y la utilización de las diferentes opciones o servicios que existen en ella (por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión o usar elementos de seguridad durante la navegación). La web de la clínica dental no puede funcionar sin ellas.
                </li>
                <li>
                  <strong>Cookies de Análisis o Estadísticas:</strong> Nos permiten saber cómo interactúas con nuestra web. Recogen información sobre las páginas que más visitas, el tiempo que pasas en cada una, el tipo de dispositivo que usas o las búsquedas que realizas. Con estos datos, podemos mejorar la experiencia de usuario y optimizar el rendimiento de la web.</li>
                <li>
                  <strong>Cookies de Publicidad: </strong> Sirven para gestionar los espacios publicitarios de la web. Estas cookies pueden almacenar información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que nos permite desarrollar un perfil específico para mostrar publicidad en función de este.</li>
                <li>
                  <strong>Cookies de Terceros: </strong> Son aquellas que se envían a tu equipo desde un equipo o dominio que no es gestionado por nosotros, sino por otra entidad que trata los datos obtenidos a través de las cookies. Por ejemplo, las que provienen de Google Analytics o de redes sociales.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl"> ¿Quién usa la información de las Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>La información de las cookies usadas en esta web es tratada por el titular del dominio, [Nombre de tu Clínica Dental], para las finalidades descritas en los puntos anteriores. También pueden ser tratadas por terceros para fines estadísticos o publicitarios.</p>
            </CardContent>
          </Card>
          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl"> ¿Cómo puedes controlar y eliminar las Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Al navegar por nuestra web, puedes aceptar, rechazar o configurar tus preferencias de cookies a través del banner que te aparece.</p>
              <p>Además, en cualquier momento, puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo a través de la configuración de las opciones de tu navegador. Si bloqueas las cookies, es posible que ciertos servicios que las requieran dejen de funcionar correctamente.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
