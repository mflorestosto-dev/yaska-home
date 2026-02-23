import { CheckeredStripe } from "@/components/checkered-stripe"
import Image from "next/image"

export function ServiciosHero() {
  return (
    <section>
      <div className="relative w-full min-h-[800px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
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
        <div className="relative z-10 w-full h-full flex items-center min-h-[800px] md:min-h-[700px] lg:min-h-[800px]">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Left: Text */}
            <div className="text-left text-gray-800 flex flex-col justify-center h-full px-6 md:px-12 lg:px-20 xl:px-32 pt-40 pb-12 md:pt-40 md:pb-16 lg:pt-24 lg:pb-12">
              <p className="text-3xl lg:text-[34px] font-light tracking-wide leading-snug">
                &ldquo;Creamos soluciones pensadas
              </p>
              <h1 className="text-[40px] md:text-[45px] lg:text-[52px] xl:text-[60px] font-bold text-[#b71776] leading-[1.1] mt-2 mb-2 whitespace-nowrap">
                para potenciar tu negocio
              </h1>
              <p className="text-3xl lg:text-[34px] font-light tracking-wide leading-snug">
                y elevar tu marca&rdquo;
              </p>
              <p className="mt-12 lg:mt-24 text-[18px] lg:text-[20px] font-bold text-black border-slate-900">
                A continuación ofrecemos nuestros servicios:
              </p>
            </div>
            {/* Right: Empty content column to reserve space and align with background */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>
      <CheckeredStripe />
    </section>
  )
}
