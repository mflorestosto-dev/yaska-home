"use client"

import { YaskaButton } from "@/components/ui/yaska-button"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    title: "GESTIÓN DE REDES SOCIALES",
    image: "https://res.cloudinary.com/dw04wgk6k/image/upload/v1773783128/libroyaska_rx353m.png",
  },
  {
    title: "DISEÑO Y BRANDING",
    image: "https://res.cloudinary.com/dw04wgk6k/image/upload/v1773783049/colores_zrmzlm.png",
  },
  {
    title: "CONTENIDO MULTIMEDIA",
    image: "https://res.cloudinary.com/dw04wgk6k/image/upload/v1773783133/tvyaska_idchza.png",
  },
  {
    title: "CONSULTORÍA Y ASESORAMIENTO",
    image: "https://res.cloudinary.com/dw04wgk6k/image/upload/v1773783131/telefonoyaska_sk8fxl.png",
  },
]

export function HomeServices() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <ScrollReveal animation="fade-up">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-black mb-6">
            Nuestros servicios
          </h2>
          <p className="mx-auto max-w-3xl text-base md:text-lg leading-snug text-black mb-12">
            Acompañamos a las marcas en cada etapa de su crecimiento digital. Desde la estrategia hasta la ejecución, combinamos diseño, contenido y gestión para crear una presencia coherente, atractiva y con impacto real.
          </p>
        </ScrollReveal>

        {/* Service Cards with stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} animation="scale-in" delay={index * 120} className="h-full">
              <div
                className="flex flex-col items-center justify-between rounded-[32px] border-2 border-black bg-[#f9c6d9] p-8 h-full hover-lift cursor-default"
              >
                <div className="relative w-full aspect-square mb-6 flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <p className="font-sans text-lg md:text-xl font-black text-black text-left w-full leading-[1.1]">
                  {service.title}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={500}>
          <div className="mt-16">
            <YaskaButton href="/servicios">
              VER TODO
            </YaskaButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
