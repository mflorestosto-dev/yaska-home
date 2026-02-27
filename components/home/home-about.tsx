import { YaskaButton } from "@/components/ui/yaska-button"
import Image from "next/image"
import { CheckeredStripe } from "@/components/checkered-stripe"

export function HomeAbout() {
  return (
    <section className="relative overflow-hidden w-full bg-cover bg-center" style={{ backgroundImage: 'url("/About-us/images/blancoyaska.jpg")' }}>
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[auto] md:min-h-[400px] lg:min-h-[600px] py-8 lg:py-0">

          {/* COLUMNA IZQUIERDA: Texto y Bio */}
          <div className="relative flex flex-col justify-center items-center p-4 py-8 md:p-8 lg:p-12 text-foreground w-full md:h-full order-2 md:order-1">
            <div className="w-[95%] md:w-[90%] xl:w-[85%] max-w-[500px] mx-auto h-auto md:h-full min-h-[350px] md:min-h-[500px] border-2 border-black bg-[#f9c6d9] px-6 md:px-10 py-10 rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center">

              <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-6">
                Hola! Somos Camila<br />
                y Yazmín.
              </h2>

              <p className="font-sans text-base md:text-lg leading-relaxed text-black/90 mb-8 font-medium">
                Fusionamos <strong className="font-bold">estrategia digital y diseño gráfico</strong> para ayudar a
                marcas que quieran destacar en redes sociales con propósito.
              </p>

              <div className="mb-4">
                <YaskaButton href="/quienes-somos" className="w-full sm:w-auto px-8 py-3">
                  ¡CONOCENOS!
                </YaskaButton>
              </div>

              {/* Avatar Pequeño */}
              <div className="relative mt-8 md:mt-auto pt-4 md:pt-6 flex justify-end">
                <div className="relative w-48 h-32 md:w-56 md:h-40 mr-[-20px] md:mr-[-40px]">
                  <Image
                    src="/Home/resources/C&Yyaska.png"
                    alt="Ilustracion personajes Camila y Yazmin"
                    fill
                    className="object-contain object-right-bottom relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Foto Principal */}
          <div className="relative flex items-center justify-center p-4 py-8 md:p-8 lg:p-12 w-full h-full order-1 md:order-2">
            <div className="relative w-[95%] md:w-[90%] xl:w-[85%] max-w-[500px] mx-auto aspect-[4/5] md:aspect-auto h-auto md:h-full min-h-[350px] md:min-h-[500px] rounded-3xl overflow-hidden border-[6px] border-[#f9c6d9]">
              <Image
                src="/Home/images/Yaska-12.jpg"
                alt="Foto Camila y Yazmin"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
      <CheckeredStripe />
    </section>
  )
}
