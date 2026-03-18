"use client"

import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export function AboutYazmin() {
  return (
    <section className="w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dw04wgk6k/image/upload/v1773782106/blancoyaska_g5gd7h.jpg")' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[auto] md:min-h-[400px] lg:min-h-[600px]">

        {/* COLUMNA IZQUIERDA: Texto y Bio */}
        <div className="relative flex flex-col justify-center items-center p-4 py-8 md:p-8 lg:p-12 text-foreground w-full md:h-full order-2 md:order-1">
          <ScrollReveal animation="slide-left">
            <div className="w-[95%] md:w-[90%] xl:w-[95%] max-w-[500px] lg:max-w-[750px] mx-auto h-auto md:h-full min-h-[350px] md:min-h-[500px] border-2 border-black bg-[#f9c6d9] px-6 md:px-10 py-10 rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center">
              {/* Título en Magenta */}
              <h2 className="text-xl md:text-2xl font-extrabold text-black uppercase tracking-wide mb-6">
                YAZMIN MARTINEZ
              </h2>

              <div className="space-y-4 md:space-y-5 text-sm leading-relaxed text-gray-800">
                <p>
                  Soy Yazmin, <span className="font-bold">diseñadora gráfica</span> recibida en la{" "}
                  <span className="font-bold">Universidad Da Vinci.</span>
                </p>

                <p>
                  Desde muy chica encontraba mi lugar dibujando, coloreando
                  libretas y llenando diarios con ideas. Siempre fui creativa, detallista
                  y apasionada por lo visual.{" "}
                  <span className="font-bold">
                    El diseño no apareció de repente en mi vida: siempre estuvo ahí, acompañándome.
                  </span>
                </p>

                <p>
                  Hoy esa creatividad se transformó en mi profesión. Me especializo
                  en identidad de marca, diseño digital e ilustración, y también
                  desarrollo proyectos de diseño editorial, packaging y piezas
                  gráficas que ayudan a las marcas a construir una imagen sólida y
                  coherente.
                </p>

                <p>
                  <span className="font-bold">Me encanta transformar ideas en experiencias visuales</span>,
                  darle personalidad a cada proyecto y lograr que una marca no solo se
                  vea bien, sino que se sienta original.
                </p>

                <p className="font-bold text-black border-t border-black/10 pt-4 mt-4">
                  Creo en el poder del diseño para comunicar, emocionar y
                  diferenciar. Y mi objetivo es que cada marca tenga una
                  identidad que la represente de verdad.
                </p>
              </div>

              {/* Avatar Pequeño con decoración rosa */}
              <div className="relative mt-8 md:mt-auto pt-4 md:pt-6 w-fit">
                {/* Elemento decorativo rosa detrás (simulando el triangulo/forma) */}
                <div className="absolute -bottom-2 -left-4 w-16 h-16 bg-pink-300 -rotate-12 -z-10 clip-path-polygon" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)' }}></div>

                <Image
                  src="https://res.cloudinary.com/dw04wgk6k/image/upload/v1773782130/yazyaska_eivypz.png"
                  alt="Ilustración Yazmin"
                  width={70}
                  height={70}
                  className="object-contain relative z-10 animate-float"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* COLUMNA DERECHA: Foto Principal */}
        <div className="relative flex items-center justify-center p-4 py-8 md:p-8 lg:p-12 w-full h-full order-1 md:order-2">
          <ScrollReveal animation="slide-right" className="w-[95%] md:w-[90%] xl:w-[95%] max-w-[500px] lg:max-w-[750px] mx-auto h-auto md:h-full">
            <div className="relative aspect-[4/5] md:aspect-auto h-auto md:h-full min-h-[350px] md:min-h-[500px] rounded-3xl overflow-hidden border-[6px] border-[#f9c6d9] bg-[#f0e8ea] img-reveal">
              <Image
                src="https://res.cloudinary.com/dw04wgk6k/image/upload/v1773782106/Yaska-27_g9a3gi.jpg"
                alt="Yazmin Martinez sentada"
                fill
                priority
                className="object-cover"
                style={{ objectPosition: 'center 40%' }}
              />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
