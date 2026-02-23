import Image from "next/image"

interface ServiceSectionProps {
  title: string
  description: string
  items: string[]
  imageSrc: string
  reversed?: boolean
  bgClass?: string
}

function ServiceSection({
  title,
  description,
  items,
  imageSrc,
  reversed = false,
  bgClass = "bg-white",
}: ServiceSectionProps) {
  return (
    <div className={`${bgClass} py-16 md:py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex flex-col gap-12 items-center justify-between ${reversed ? "md:flex-row-reverse" : "md:flex-row"
            }`}
        >
          {/* Text content */}
          <div className="flex-1 max-w-xl">
            <h3 className="text-xl md:text-[28px] font-bold text-black mb-4 leading-snug">
              {title}
            </h3>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-800 mb-6 font-medium">
              {description}
            </p>
            <ul className="space-y-2 ml-5 list-disc marker:text-black">
              {items.map((item) => (
                <li
                  key={item}
                  className="text-[14px] md:text-[15px] text-gray-800 font-medium pl-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center items-center w-full">
            <div className="relative w-full max-w-[400px] h-[300px] md:h-[400px]">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const services: ServiceSectionProps[] = [
  {
    title: "Gestión de redes sociales:",
    description:
      "Creamos y gestionamos el contenido de tu marca con estrategia y planificación. Nos ocupamos de la comunicación diaria y la interacción con tu comunidad para que tu presencia digital sea profesional, coherente y efectiva.",
    items: [
      "Community Management",
      "Estrategia de contenido",
      "Creación y planificación de publicaciones",
      "Interacción con la comunidad",
    ],
    imageSrc: "/Home/resources/telefonoyaska.png",
    reversed: false,
    bgClass: "bg-white",
  },
  {
    title: "Diseño & creación de branding",
    description:
      "Construimos la identidad visual de tu marca y diseñamos un feed estético y alineado a tu esencia. Creamos piezas gráficas estratégicas para que tu comunicación se vea profesional, coherente y memorable.",
    items: [
      "Diseño de identidad visual",
      "Feed estético y alineado a la marca",
      "Diseño de piezas gráficas para redes",
    ],
    imageSrc: "/Home/resources/colores.png",
    reversed: true,
    bgClass: "bg-[#F9E0E3]",
  },
  {
    title: "Contenido Multimedial",
    description:
      "Producimos y editamos contenido visual para que tu marca se destaque. Videos cortos, fotografía y retoque digital pensados para captar atención, generar conexión y aportar valor a tu comunicación.",
    items: [
      "Creación de contenido",
      "Edición de videos cortos para reels y TikTok",
      "Fotografía y retoque digital",
    ],
    imageSrc: "/Services/resources/camarayaska.png",
    reversed: false,
    bgClass: "bg-white",
  },
  {
    title: "Consultoría y asesoramiento",
    description:
      "Evaluamos y optimizamos tus redes para que comuniques mejor y con estrategia. Incluye auditoría, optimización de perfiles y capacitación para que puedas gestionar tu marca de manera profesional y efectiva.",
    items: [
      "Auditoría de redes sociales",
      "Optimización de perfiles",
      "Capacitación para manejo de redes",
    ],
    imageSrc: "/Services/resources/1yaska.png",
    reversed: true,
    bgClass: "bg-[#F9E0E3]",
  },
]

export function ServiciosList() {
  return (
    <section>
      {services.map((service) => (
        <ServiceSection key={service.title} {...service} />
      ))}
    </section>
  )
}
