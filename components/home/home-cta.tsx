import { YaskaButton } from "@/components/ui/yaska-button"
import Image from "next/image"

export function HomeCTA() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden flex items-center py-16 md:py-24">
      {/* Background Image */}
      <Image
        src="/Home/resources/negroyaska.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Absolute Phone in Corner */}
      <div className="absolute -left-10 -bottom-20 w-64 h-96 md:w-[450px] md:h-[600px] z-10 rotate-[-5deg]">
        <Image
          src="/Home/resources/telefonoyaska.png"
          alt="Celular YASKA"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Characters */}
          <div className="relative w-64 h-80 md:w-[400px] md:h-[500px] md:ml-32 mt-12 md:mt-0">
            <Image
              src="/Home/resources/C&YFooter.png"
              alt="Personajes Camila y Yazmin"
              fill
              className="object-contain"
            />
          </div>

          {/* Text + CTA and Lips */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left relative w-full h-full pb-16 md:pb-0">
            <div className="mb-8 md:mb-12 relative z-20">
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 uppercase leading-none">
                ¿Trabajamos juntos?
              </h2>
              <p className="text-xl md:text-2xl text-white font-medium mb-10">
                Completá el formulario y nos contactamos.
              </p>
              <YaskaButton href="/contacto">
                ¡CONTÁCTANOS!
              </YaskaButton>
            </div>

            {/* Lips Illustration */}
            <div className="absolute right-0 bottom-[-20px] md:relative md:right-auto md:bottom-auto w-32 h-24 sm:w-48 sm:h-36 md:w-[400px] md:h-72 self-end pointer-events-none opacity-80 md:opacity-100 flex-shrink-0 z-10">
              <Image
                src="/Home/resources/telefono bocayaska.png"
                alt="Ilustración labios"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
