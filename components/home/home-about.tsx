import Link from "next/link"
import Image from "next/image"
import { CheckeredStripe } from "@/components/checkered-stripe"

export function HomeAbout() {
  return (
    <section className="relative overflow-hidden border-t-[12px] border-[#8b5cf6] bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row items-stretch min-h-[600px] gap-8 md:gap-16">
          {/* Left column: text + characters */}
          <div className="flex-1 px-6 py-16 md:pl-12 lg:pl-20 md:py-24 flex flex-col justify-center items-start">
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-8">
              Hola! Somos Camila<br />
              y Yazmín.
            </h2>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-black/90 max-w-lg mb-10">
              Fusionamos <strong>estrategia digital y diseño gráfico</strong> para ayudar a
              marcas que quieran destacar en redes sociales con propósito.
            </p>
            <div className="mb-12">
              <Link
                href="/quienes-somos"
                className="inline-block rounded-full border-2 border-black bg-[#f9c6d9] px-12 py-3 text-sm font-bold text-black uppercase tracking-tight hover:bg-[#f7a8c4] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                ¡CONOCENOS!
              </Link>
            </div>
            <div className="relative w-72 h-48 -ml-6">
              <Image
                src="/Home/resources/C&Yyaska.png"
                alt="Ilustracion personajes Camila y Yazmin"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Right column: photo */}
          <div className="flex-1 relative min-h-[450px] md:min-h-full">
            <Image
              src="/Home/images/Yaska-12.jpg"
              alt="Foto Camila y Yazmin"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <CheckeredStripe />
    </section>
  )
}
