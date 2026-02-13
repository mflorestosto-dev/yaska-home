import { ImagePlaceholder } from "@/components/image-placeholder"

export function AboutProceso() {
  return (
    <section className="bg-foreground text-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-background tracking-wide">
          PROCESO CREATIVO
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-background/70">
          Te mostramos el detras de escena de como trabajamos con nuestras marcas: ideas
          en proceso, dias de produccion y momentos reales de creacion.
        </p>

        {/* Photo Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ImagePlaceholder
            label="Proceso creativo 1"
            className="w-full h-48 md:h-56 border-background/20"
            aspectRatio=""
          />
          <ImagePlaceholder
            label="Proceso creativo 2"
            className="w-full h-48 md:h-56 border-background/20"
            aspectRatio=""
          />
          <ImagePlaceholder
            label="Proceso creativo 3"
            className="w-full h-48 md:h-56 border-background/20"
            aspectRatio=""
          />
        </div>
      </div>
    </section>
  )
}
