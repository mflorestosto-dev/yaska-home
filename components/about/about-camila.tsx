import Image from "next/image"

export function AboutCamila() {
  return (
    <section className="w-full bg-cover bg-center" style={{ backgroundImage: 'url("/About-us/images/blancoyaska.jpg")' }}>
      {/* Grid de 2 columnas: Foto Izquierda | Texto Derecha */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[auto] md:min-h-[400px] lg:min-h-[600px]">

        {/* COLUMNA IZQUIERDA: Foto Principal */}
        <div className="relative flex items-center justify-center p-6 md:p-8 lg:p-12 w-full h-full">
          <div className="relative w-full max-w-[420px] md:max-w-[480px] lg:max-w-[520px] aspect-[4/5] md:aspect-auto h-auto md:h-full min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden border-[6px] border-[#f9c6d9]">
            <Image
              src="/About-us/images/Yaska-39.jpg"
              alt="Camila Vicente"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* COLUMNA DERECHA: Texto y Bio */}
        <div className="relative flex flex-col justify-center items-center md:items-start p-6 md:p-8 lg:p-12 text-foreground w-full md:h-full">

          <div className="w-full max-w-[420px] md:max-w-[480px] lg:max-w-[520px] h-auto md:h-full min-h-[400px] md:min-h-[500px] mx-auto md:mx-0 border-2 border-black bg-[#f9c6d9] p-8 md:p-10 lg:p-12 rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center">
            {/* Título en Magenta */}
            <h2 className="text-xl md:text-2xl font-bold text-[#c026d3] uppercase tracking-wide mb-6 bg-white/50 w-fit px-3 py-1 rounded-lg border border-[#c026d3]">
              CAMILA VICENTE
            </h2>

            {/* Texto con espaciado y negritas específicas */}
            <div className="space-y-4 md:space-y-5 text-sm leading-relaxed text-gray-800">
              <p>
                Hola, <span className="font-bold">soy Camila, Community Manager</span> y estudiante avanzada de la{" "}
                <span className="font-bold">Licenciatura en Publicidad.</span>
              </p>

              <p>
                Desde chica supe que lo mío era el mundo digital. <span className="font-bold">En esa época editaba en Photoscape y usaba Facebook como mi espacio creativo:</span> armaba revistas, collages y páginas donde subía contenido simplemente por el placer de crear. <span className="font-bold">Me fascinaba probar, editar y comunicarme con los demás.</span>
              </p>

              <p>
                Con el tiempo, <span className="font-bold">esa curiosidad se transformó en profesión.</span> Hoy me especializo en estrategia de contenido y gestión de redes sociales, <span className="font-bold">ayudando a marcas a ordenar su comunicación, conectar con su audiencia y crecer con intención.</span>
              </p>

              <p>
                Me apasiona grabar, sacar fotos, pensar ideas y darles forma. Porque para mí, comunicar no es solo publicar: es entender qué quiere decir una marca y encontrar la manera más clara, auténtica y estratégica de transmitirlo.
              </p>

              <p className="font-bold text-black border-t border-black/10 pt-4 mt-4">
                Creo en las marcas que tienen algo para decir, y mi trabajo es ayudarlas a hacerlo de la mejor manera posible.
              </p>
            </div>

            {/* Avatar Pequeño Alineado a la Derecha */}
            <div className="relative mt-auto pt-6 flex justify-end">
              <div className="relative w-fit">
                {/* Elemento decorativo rosa detrás en la esquina derecha */}
                <div
                  className="absolute -bottom-2 -right-2 w-20 h-20 bg-pink-300 rotate-12 -z-10 opacity-90"
                  style={{ clipPath: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)' }}
                ></div>

                <Image
                  src="/About-us/resources/camiyaska.png"
                  alt="Ilustración Camila"
                  width={80} // Un poco más grande para destacar
                  height={80}
                  className="object-contain relative z-10"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}