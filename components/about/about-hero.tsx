import Image from "next/image"
import { CheckeredStripe } from "@/components/checkered-stripe"

export function AboutHero() {
  return (
    <section className="relative w-full bg-white">

      {/* IMAGEN HERO */}
      <div className="w-full">
        <Image
          src="/About-us/images/Yaska-hero.jpg"
          alt="Camila y Yazmin Hero"
          width={1366}
          height={814}
          priority
          className="w-full h-auto"
        />
      </div>
      <CheckeredStripe />
    </section>
  )
}