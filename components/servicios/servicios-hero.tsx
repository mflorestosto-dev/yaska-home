import { CheckeredStripe } from "@/components/checkered-stripe"
import Image from "next/image"

export function ServiciosHero() {
  return (
    <section>
      <div className="relative w-full min-h-[500px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          {/* Left background: Image from 6.jpg */}
          <div className="relative bg-cover bg-center" style={{ backgroundImage: `url("/Services/resources/6.jpg")` }}></div>
          {/* Right background: Image Yaska-16.jpg */}
          <div className="relative hidden md:block"> {/* Hide on mobile, show on md and up */}
            <Image
              src="/Services/images/Yaska-16.jpg"
              alt="Servicios Hero Background"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Content layer */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:py-16 lg:py-20">
          <div className="w-full h-full flex items-center"> {/* This div ensures content takes full width within max-w-7xl */}
            {/* Left: Text */}
            <div className="md:w-1/2 text-center md:text-left text-gray-800 flex flex-col justify-center py-4 md:py-0 pr-4 md:pr-0">
              <p className="text-xl md:text-2xl leading-relaxed">
                {'"Creamos soluciones pensadas'}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#d946ef] leading-tight mt-1 mb-2">
                para potenciar tu negocio
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mt-1">
                {'y elevar tu marca"'}
              </p>
              <p className="mt-6 text-base font-bold text-gray-900">
                A continuación ofrecemos nuestros servicios:
              </p>
            </div>
            {/* Right side is now handled by the background image */}
          </div>
        </div>
      </div>
      <CheckeredStripe />
    </section>
  )
}
