export interface Post {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  content: string;
  image: string;
  imageHint: string;
}

const posts: Post[] = [
  {
    slug: "como-mantener-una-buena-higiene-bucal",
    title: "Cómo Mantener una Buena Higiene Bucal en Casa",
    description: "Consejos prácticos y sencillos para cuidar tu sonrisa cada día y prevenir problemas dentales.",
    author: "Dra. Elena García",
    date: "2024-05-15",
    image: "https://placehold.co/1200x600.png",
    imageHint: "brushing teeth bathroom",
    content: `
      <p>Mantener una buena higiene bucal es fundamental para prevenir caries, enfermedades de las encías y otros problemas de salud. No se trata solo de tener una sonrisa bonita, sino de cuidar tu bienestar general. Aquí te dejamos algunos consejos clave:</p>
      <h3 class="font-bold text-lg mt-4 mb-2">1. Cepillado Correcto</h3>
      <p>Debes cepillarte los dientes al menos dos veces al día durante dos minutos. Utiliza un cepillo de cerdas suaves y una pasta dental con flúor. Asegúrate de cepillar todas las superficies de cada diente con movimientos suaves y circulares.</p>
      <h3 class="font-bold text-lg mt-4 mb-2">2. El Hilo Dental es tu Aliado</h3>
      <p>El cepillado solo no puede llegar a todos los rincones. Usa hilo dental diariamente para eliminar la placa y los restos de comida que se acumulan entre los dientes y debajo de la línea de las encías.</p>
      <h3 class="font-bold text-lg mt-4 mb-2">3. Cuida tu Alimentación</h3>
      <p>Limita el consumo de alimentos y bebidas azucaradas, ya que contribuyen a la formación de caries. Una dieta equilibrada rica in frutas y verduras fortalece tus dientes.</p>
      <h3 class="font-bold text-lg mt-4 mb-2">4. Visita al Dentista Regularmente</h3>
      <p>Las revisiones y limpiezas profesionales cada seis meses son esenciales para detectar problemas a tiempo y mantener tu boca en perfecto estado.</p>
      <p class="mt-4">Siguiendo estos sencillos pasos, estarás en el camino correcto para disfrutar de una sonrisa sana y radiante durante toda tu vida.</p>
    `,
  },
  {
    slug: "beneficios-de-la-ortodoncia-invisible",
    title: "Los Beneficios de la Ortodoncia Invisible",
    description: "Descubre por qué los alineadores transparentes son una opción cada vez más popular para corregir la sonrisa.",
    author: "Dra. Sofía Reyes",
    date: "2024-04-22",
    image: "https://placehold.co/1200x600.png",
    imageHint: "transparent dental aligner",
    content: `
      <p>La ortodoncia ha evolucionado mucho en los últimos años, y una de las innovaciones más destacadas es la ortodoncia invisible. Este sistema utiliza alineadores transparentes hechos a medida para mover los dientes gradualmente hasta la posición deseada. ¿Cuáles son sus ventajas?</p>
      <h3 class="font-bold text-lg mt-4 mb-2">1. Estética</h3>
      <p>Son prácticamente invisibles. Nadie notará que los llevas puestos, lo que te permite sonreír con confianza durante todo el tratamiento.</p>
      <h3 class="font-bold text-lg mt-4 mb-2">2. Comodidad</h3>
      <p>Al no tener alambres ni brackets, se evitan las rozaduras y heridas en la boca. Están hechos de un material suave y se ajustan perfectamente a tus dientes.</p>
      <h3 class="font-bold text-lg mt-4 mb-2">3. Removibles</h3>
      <p>Puedes quitarte los alineadores para comer, beber, cepillarte los dientes y usar hilo dental. Esto te permite mantener una higiene bucal óptima y no tener restricciones en tu dieta.</p>
      <h3 class="font-bold text-lg mt-4 mb-2">4. Predecibles</h3>
      <p>Gracias a la planificación digital 3D, puedes ver el resultado final de tu sonrisa incluso antes de empezar el tratamiento.</p>
      <p class="mt-4">Si estás pensando en alinear tus dientes, la ortodoncia invisible puede ser la solución perfecta para ti. ¡Consúltanos!</p>
    `,
  },
];

export function getPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
