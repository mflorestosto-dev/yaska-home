import Image from "next/image";

export function AboutYazmin() {
  return (
    <section className="w-full bg-cover bg-center" style={{ backgroundImage: 'url("/About-us/images/blancoyaska.jpg")' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[auto] md:min-h-[400px] lg:min-h-[600px]">
        
        {/* COLUMNA IZQUIERDA: Texto y Bio */}
        {/* Usamos bg-gray-50 para simular el color papel/textura de la imagen */}
        <div className="relative flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-gray-50 text-foreground">
          
          <div className="max-w-lg">
            {/* Título con borde estilo caja */}
            {/* Ajusta los colores hex si tienes variables especificas en tu tailwind.config */}
            <h2 className="w-fit border-2 border-[#7c3aed] px-3 py-1 text-2xl md:text-3xl font-bold text-[#c026d3] uppercase tracking-wide mb-8">
              YAZMIN MARTINEZ
            </h2>

            <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-800">
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

              <p className="font-bold text-black">
                Creo en el poder del diseño para comunicar, emocionar y
                diferenciar. Y mi objetivo es que cada marca tenga una
                identidad que la represente de verdad.
              </p>
            </div>

            {/* Avatar Pequeño con decoración rosa */}
            <div className="relative mt-12 w-fit">
              {/* Elemento decorativo rosa detrás (simulando el triangulo/forma) */}
              <div className="absolute -bottom-4 -left-6 w-24 h-24 bg-pink-300 -rotate-12 -z-10 clip-path-polygon" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)'}}></div>
              
              <Image
                src="/About-us/resources/yazyaska.png"
                alt="Ilustración Yazmin"
                width={100} 
                height={100}
                className="object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Foto Principal */}
        {/* Fondo blanco limpio para que la foto "respire" como en el diseño */}
        <div className="relative w-full aspect-[3/4] md:h-auto bg-white flex items-center justify-center p-8">
          <div className="relative w-full h-full max-w-md md:max-w-full">
            <Image
              src="/About-us/images/Yaska-27.jpg"
              alt="Yazmin Martinez sentada"
              fill
              priority
              className="object-cover object-center" 
              // object-contain evita que se recorte si la foto tiene fondo blanco integrado
            />
          </div>
        </div>

      </div>
    </section>
  );
}
