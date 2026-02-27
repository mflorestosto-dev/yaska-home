import Image from "next/image"
import { YaskaButton } from "@/components/ui/yaska-button"
import { CheckeredStripe } from "@/components/checkered-stripe"

export function HomeHero() {
  return (
    <section className="relative w-full bg-white">
      {/* IMAGEN HERO COMPLETA Y RESPONSIVA */}
      <div className="relative w-full flex flex-col items-center">
        <Image
          src="/Home/images/Yaska-hero.jpg"
          alt="Yaska Agencia Creativa Hero"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto"
        />

        {/* BOTÓN COLABOREMOS Y NEO-BRUTALISTA */}
        <div className="absolute bottom-[8%] sm:bottom-[10%] md:bottom-[15%] w-full flex justify-center z-10">
          <YaskaButton
            href="/contacto"
            className="text-[10px] sm:text-xs md:text-lg px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4"
          >
            !COLABOREMOS!
          </YaskaButton>
        </div>
      </div>
      <CheckeredStripe />
    </section>
  )
}
