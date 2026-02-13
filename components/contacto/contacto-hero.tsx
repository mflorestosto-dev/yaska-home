import { ImagePlaceholder } from "@/components/image-placeholder"

export function ContactoHero() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: illustration */}
          <div className="flex-shrink-0">
            <ImagePlaceholder
              label="Celular YASKA"
              className="w-32 h-48 md:w-40 md:h-56 border-background/20"
              aspectRatio=""
            />
          </div>

          {/* Center: text */}
          <div className="flex-1 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-background">
              {'!Estamos aqui para ayudarte!'}
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-background/70">
              Comunicate con nosotras a traves de los siguientes
              medios para resolver cualquier duda o coordinar tu
              proximo proyecto.
            </p>
          </div>

          {/* Right: illustration */}
          <div className="flex-shrink-0">
            <ImagePlaceholder
              label="Ilustracion personajes"
              className="w-40 h-48 md:w-48 md:h-56 border-background/20"
              aspectRatio=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
