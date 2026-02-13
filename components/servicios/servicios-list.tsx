import { ImagePlaceholder } from "@/components/image-placeholder"

interface ServiceSectionProps {
  title: string
  description: string
  items: string[]
  imageLabel: string
  reversed?: boolean
  bgClass?: string
}

function ServiceSection({
  title,
  description,
  items,
  imageLabel,
  reversed = false,
  bgClass = "bg-background",
}: ServiceSectionProps) {
  return (
    <div className={`${bgClass} py-12 md:py-16`}>
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex flex-col gap-8 items-center ${
            reversed ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Text content */}
          <div className="flex-1 max-w-lg">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              {title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              {description}
            </p>
            <ul className="mt-4 space-y-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-foreground/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image placeholder */}
          <div className="flex-1 flex justify-center">
            <ImagePlaceholder
              label={imageLabel}
              className="w-full max-w-sm h-56 md:h-72"
              aspectRatio=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const services: ServiceSectionProps[] = [
  {
    title: "Gestion de redes sociales:",
    description:
      "Creamos y gestionamos el contenido de tu marca con estrategia y planificacion. Nos ocupamos de la comunicacion diaria y la interaccion con tu comunidad para que tu presencia digital sea profesional, coherente y efectiva.",
    items: [
      "Community Management",
      "Estrategia de contenido",
      "Creacion y planificacion de publicaciones",
      "Interaccion con la comunidad",
    ],
    imageLabel: "Ilustracion celular YASKA",
    reversed: false,
    bgClass: "bg-background",
  },
  {
    title: "Diseno & creacion de branding",
    description:
      "Construimos la identidad visual de tu marca y disenamos un feed estetico y alineado a tu esencia. Creamos piezas graficas estrategicas para que tu comunicacion se vea profesional, coherente y memorable.",
    items: [
      "Diseno de identidad visual",
      "Feed estetico y alineado a la marca",
      "Diseno de piezas graficas para redes",
    ],
    imageLabel: "Ilustracion paletas de colores",
    reversed: true,
    bgClass: "bg-muted",
  },
  {
    title: "Contenido Multimedial",
    description:
      "Producimos y editamos contenido visual para que tu marca se destaque. Videos cortos, fotografia y retoque digital pensados para captar atencion, generar conexion y aportar valor a tu comunicacion.",
    items: [
      "Creacion de contenido",
      "Edicion de videos cortos para reels y TikTok",
      "Fotografia y retoque digital",
    ],
    imageLabel: "Ilustracion camara SONY",
    reversed: false,
    bgClass: "bg-background",
  },
  {
    title: "Consultoria y asesoramiento",
    description:
      "Evaluamos y optimizamos tus redes para que comuniques mejor y con estrategia. Incluye auditoria, optimizacion de perfiles y capacitacion para que puedas gestionar tu marca de manera profesional y efectiva.",
    items: [
      "Auditoria de redes sociales",
      "Optimizacion de perfiles",
      "Capacitacion para manejo de redes",
    ],
    imageLabel: "Ilustracion personajes consultoria",
    reversed: true,
    bgClass: "bg-secondary",
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
