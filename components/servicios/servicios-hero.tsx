import { CheckeredStripe } from "@/components/checkered-stripe"
import Image from "next/image"

export function ServiciosHero() {
  return (
    <section className="relative w-full bg-white">
      {/* IMAGEN HERO COMPLETA Y RESPONSIVA */}
      <div className="w-full">
        <Image
          src="/Services/images/Yaska-services.jpg"
          alt="Servicios Hero Background"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto"
        />
      </div>
      <CheckeredStripe />
    </section>
  )
}
