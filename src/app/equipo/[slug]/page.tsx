import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/componentes/ui/card";
import { Badge } from '@/componentes/ui/badge';
const teamMembers = [
  {
    name: "Javier Cuevas Ortiz",
    specialty: "Implantología y Cirugía Oral",
    description: "Especialista en la rehabilitación de implantes dentales y cirugía oral avanzada. Su precisión es su mayor virtud.",
    avatar: "/images/equipo/javi.jpeg",
    initials: "JC",
    aiHint: "professional man smiling",
    slug: "javier-cuevas",
    bio: "El Dr. Javier Cuevas Ortiz destaca por su dedicación absoluta hacia la excelencia clínica en el ámbito de la rehabilitación bucodental. Con una trayectoria profesional de más de década y media, ha perfeccionado técnicas quirúrgicas mínimamente invasivas que garantizan resultados óptimos en cada intervención.\n\nSu enfoque personalizado y meticuloso se refleja en el seguimiento exhaustivo que brinda a cada paciente, desde la consulta inicial hasta la recuperación completa. La cordialidad y profesionalismo que caracterizan su práctica diaria han consolidado vínculos de confianza duraderos con quienes confían en su expertise.\n\nSu compromiso con la formación continua le permite incorporar las últimas innovaciones tecnológicas en beneficio de la salud bucal de sus pacientes, logrando transformaciones funcionales y estéticas que superan las expectativas. La precisión técnica, combinada con su trato humano y cercano, convierte cada tratamiento en una experiencia satisfactoria que perdura en el tiempo.",
    experience: "15+ años",
    education: ["Universidad de Alfonso X (Madrid)", "Máster en Implantología"],
    specializations: ["Implantes dentales", "Cirugía oral avanzada", "Rehabilitación bucal"]
  },
  {
    name: "Raquel Martín Sánchez",
    specialty: "Ortodoncista",
    description: "Especializada en ortodoncia y armonización orofacial",
    avatar: "/images/equipo/raquel_dent.png",
    initials: "RM",
    aiHint: "professional woman smiling",
    slug: "raquel-martin-sanchez",
    bio: "La Dra. Raquel Martín Sánchez se distingue como especialista en ortodoncia y ortopedia dentofacial, combinando técnicas tradicionales con innovaciones estéticas avanzadas en armonización orofacial mediante ácido hialurónico. Su pertenencia activa a la Sociedad Española de Ortodoncia y Ortopedia Dentofacial refleja su compromiso con la excelencia profesional y la actualización constante de conocimientos.\n\nCon una amplia trayectoria en tratamientos odontológicos, la doctora ha desarrollado una expertise integral que abarca desde brackets convencionales hasta sistemas de alineadores transparentes como Invisalign y Spark. Su especialización en aparatos interceptivos para pacientes pediátricos demuestra su visión preventiva, mientras que su formación en dispositivos DAM para apnea del sueño amplía su capacidad terapéutica hacia la medicina del sueño.\n\nSu enfoque holístico trasciende la simple alineación dentaria, priorizando el equilibrio funcional y estético de la oclusión. La integración de técnicas de armonización facial con ácido hialurónico en el tercio inferior complementa sus tratamientos ortodóncicos, ofreciendo resultados que optimizan tanto la función masticatoria como la estética facial. Su dedicación a la formación continua garantiza que sus pacientes reciban siempre los tratamientos más avanzados y efectivos del sector.",
    experience: "15+ años",
    education: ["Universidad de Granada", "Máster en Ortodoncia"],
    specializations: ["Ortodoncia", "Armonización orofacial"]
  },
  {
    name: "Carmen Gálvez",
    specialty: "Odontóloga General y Ortodoncista",
    description: "Especialista en odontología general y ortodoncia, con amplia formación en técnicas de alineadores invisibles y ortodoncia interceptiva.",
    avatar: "/images/equipo/carmen.JPEG",
    initials: "C",
    aiHint: "professional woman smiling",
    slug: "carmen-sola",
    bio: "La Dra. Carmen se distingue por su enfoque integral y meticuloso en el cuidado bucodental, combinando su sólida base en odontología general con una especialización avanzada en ortodoncia. Su formación académica en la prestigiosa Universidad Europea de Madrid le proporcionó los fundamentos científicos que ha enriquecido posteriormente con estudios especializados en la Universidad Católica San Antonio de Murcia, donde obtuvo tanto su título de Experto como su Máster en Ortodoncia Clínica, Ortopedia Dentofacial y Alineadores.\n\nSu expertise en ortodoncia interceptiva refleja su visión preventiva y su compromiso con la atención temprana, permitiéndole detectar y corregir problemas de desarrollo dental desde edades pediátricas. Esta especialización, unida a su dominio en ortodoncia clínica y ortopedia dentofacial, la capacita para ofrecer tratamientos comprehensivos que abordan tanto la función como la estética dental en pacientes de todas las edades. Su dedicación a la excelencia se evidencia en sus certificaciones en los sistemas de alineadores invisibles más avanzados del mercado: Invisalign, Alineadent y HeySmile.\n\nLa Dra. Carmen destaca por su trato cercano y empático, cualidades que, combinadas con su rigor científico y actualización constante, generan un ambiente de confianza donde cada paciente se siente escuchado y comprendido. Su filosofía de trabajo se centra en tratamientos personalizados que no solo corrigen la posición dental, sino que optimizan la función masticatoria y realzan la armonía facial, logrando sonrisas saludables que perduran en el tiempo y mejoran significativamente la calidad de vida de sus pacientes.",
    experience: "10+ años",
    education: [
      "Grado en Odontología - Universidad Europea de Madrid",
      "Experto en Ortodoncia Interceptiva y Ortodoncia Clínica - Universidad Católica San Antonio de Murcia",
      "Máster en Ortodoncia Clínica, Ortopedia Dentofacial y Alineadores - Universidad Católica San Antonio de Murcia"
    ],
    specializations: [
      "Odontología general", 
      "Ortodoncista",
      "Certificación Invisalign",
      "Certificación Alineadent", 
      "Certificación HeySmile",
      "Ortodoncia Interceptiva"
    ]
  },
  /*{
    name: "Florencia D'Antiochia Garofalo",
    specialty: "Odontóloga General y Estética",
    description: "Especialista en odontología general y estética, dedicada a mejorar la salud y apariencia de la sonrisa de sus pacientes.",
    avatar: "/images/equipo/raquel_sola.png",
    initials: "FD",
    aiHint: "professional woman smiling"
  },*/
  {
    name: "Raquel", 
    specialty: "Higienista Dental",
    description: "Profesional empática y comprometida con la excelencia en higiene bucodental. Su formación en enfermería y especialización dental la convierten en una experta integral en cuidado del paciente.",
    avatar: "/images/equipo/raquel.JPEG",
    initials: "RC",
    aiHint: "professional dentist smiling",
    slug: "raquel-higienista",
    bio: "Raquel destaca por su personalidad risueña, empática y responsable, cualidades fundamentales que se reflejan en su trato directo con los pacientes. Su trayectoria profesional comenzó como Técnico en Cuidados Auxiliares de Enfermería, trabajando en clínicas dentales y hospitales, experiencia que le proporcionó una comprensión integral del cuidado del paciente.\n\nEn 2019 tomó la decisión de especializarse completamente en el mundo dental, acumulando desde entonces más de 6 años de experiencia específica en higiene bucodental. Su mentalidad de crecimiento continuo la lleva a formarse constantemente para mantenerse actualizada con las últimas técnicas y avances.\n\nSu experiencia previa en enfermería le ha enseñado la importancia de la atención integral, considerando no solo las necesidades clínicas sino también el bienestar emocional de los pacientes. Su colaboración con el Dr. Javier Cuevas ha fortalecido sus habilidades clínicas y su capacidad para trabajar en equipo, aspectos fundamentales en una clínica dental exitosa.",
    experience: "6+ años",
    education: [
      "Técnico en Cuidados Auxiliares de Enfermería - IES Santa Bárbara de Málaga",
      "Técnico Superior en Higiene Bucodental - IES Santa Bárbara de Málaga", 
      "Operador de RX",
      "Soporte Vital Básico y DEA",
      "Ortodoncia para Higienistas y Auxiliares"
    ],
    specializations: [
      "Higiene dental", 
      "Prevención de enfermedades bucales", 
      "Educación en salud dental",
      "Atención integral del paciente",
      "Comunicación terapéutica",
      "Trabajo en equipo interdisciplinar"
    ]
  }
  
];

function findMemberBySlug(slug: string) {
    return teamMembers.find(member => member.slug === slug);
}

export default async function MemberPage({ params } : { params: Promise<{ slug: string }>}) {
  const {slug} = await params;
    const member = findMemberBySlug(slug);
    
    if (!member) {
        notFound();
    }
    return (
  <div className="bg-background">
    <div className="container mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-24">
      {/* Sección principal con foto y info básica */}
      <div className="mx-4 md:mx-8 mb-16">
        
        {/* Layout Desktop: Foto + Información lado a lado */}
        <div className="hidden lg:flex lg:gap-6 mb-16">
          {/* Columna izquierda - Foto */}
          <div className="flex-shrink-0">
            <div className="relative w-96 h-[500px] overflow-hidden rounded-lg">
              <Image
                src={member.avatar}
                alt={member.name}
                fill
                className={`object-cover ${member.slug === 'raquel-higienista' ? 'object-left' : ''}`}
                data-ai-hint={member.aiHint}
              />
            </div>
          </div>
          
          {/* Columna derecha - Información y Biografía */}
          <div className="flex-1 space-y-8 pl-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">{member.name}</h1>
              <h2 className="text-2xl font-bold mb-6 text-gray-600">{member.specialty}</h2>
            </div>
            
            {/* Biografía extendida en Desktop */}
            <Card className="shadow-sm">
              <CardContent>
                <div className="text-black leading-8 text-base space-y-4 mt-4">
                  {member.bio.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Layout Móvil/Tablet: Todo en columna */}
        <div className="lg:hidden">
          {/* Foto */}
          <div className="flex-shrink-0 mx-auto mb-6">
            <div className="relative w-80 h-96 overflow-hidden rounded-lg">
              <Image
                src={member.avatar}
                alt={member.name}
                fill
                className={`object-cover ${member.slug === 'raquel-higienista' ? 'object-left' : ''}`}
                data-ai-hint={member.aiHint}
              />
            </div>
          </div>

          {/* Información básica */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{member.name}</h1>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-600">{member.specialty}</h2>
          </div>
          
          {/* Biografía extendida en Móvil */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-center">Sobre {member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-black leading-7 text-sm md:text-base space-y-4">
                {member.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-justify">{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
      </div> {/* Cierra sección principal */}

      {/* Sección de información profesional */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Card className="p-6">
            <h3 className='text-xl font-bold mb-4 text-gray-800 text-center'>Formación</h3>
            <div className='space-y-3'>
              {member.education.map((edu,index) => (
                <div key={index} className='flex items-start justify-start'>
                  <div className='w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0 mt-2'></div>
                  <span className="text-sm leading-relaxed">{edu}</span>
                </div>
              ))}
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className='text-xl font-bold mb-4 text-gray-800 text-center'>Especialidades</h3>
            <div className='flex flex-wrap gap-2 justify-center'>
              {member.specializations.map((spec, index) => (
                <Badge key={index} variant='secondary' className="text-xs">
                  {spec}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
      
    </div> 
  </div> 
);
    }