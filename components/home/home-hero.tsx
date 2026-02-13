import Link from "next/link"
import { CheckeredStripe } from "@/components/checkered-stripe"
import { ImagePlaceholder } from "@/components/image-placeholder"

export function HomeHero() {
  return (
    <section>
      {/* Hero Banner */}
      <div className="pink-stripes relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* Left: Illustrations placeholders */}
            <div className="flex-1 flex flex-col items-start gap-6">
              <ImagePlaceholder
                label="Ilustracion personaje con camara"
                className="w-40 h-48 md:w-52 md:h-60"
                aspectRatio=""
              />
              <p className="text-sm italic text-foreground/60">{'<3'}</p>
            </div>

            {/* Center: Text */}
            <div className="flex-1 text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
                Elevamos a marcas{" "}
                <strong>con identidad y estrategia digital</strong>
                <br />
                para brillar.
              </h1>
              <div className="mt-6">
                <Link
                  href="/contacto"
                  className="inline-block rounded-full border-2 border-foreground bg-transparent px-6 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  {'!COLABOREMOS!'}
                </Link>
              </div>
              <p className="mt-6 text-sm italic text-foreground/60">xo xo</p>
            </div>

            {/* Right: Illustration placeholder */}
            <div className="flex-1 flex justify-end">
              <ImagePlaceholder
                label="Ilustracion personaje con lentes"
                className="w-40 h-56 md:w-52 md:h-64"
                aspectRatio=""
              />
            </div>
          </div>
        </div>
      </div>

      <CheckeredStripe />
    </section>
  )
}
