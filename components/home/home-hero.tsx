import Image from "next/image"
import Link from "next/link"
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
          <Link
            href="/contacto"
            className="group relative inline-flex items-center justify-center px-6 py-3 md:px-10 md:py-4 font-bold text-black uppercase tracking-wider text-sm md:text-lg bg-[#f9c6d9] border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
          >
            !COLABOREMOS!
          </Link>
        </div>
      </div>
      <CheckeredStripe />
    </section>
  )
}
