import Image from "next/image"

export function AboutCamila() {
  return (
    <section className="w-full bg-cover bg-center" style={{ backgroundImage: 'url("/About-us/images/blancoyaska.jpg")' }}>
      {/* Grid de 2 columnas: Foto Izquierda | Texto Derecha */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[auto] md:min-h-[400px] lg:min-h-[600px]">
        
        {/* COLUMNA IZQUIERDA: Foto Principal */}
        {/* Fondo blanco y la imagen ocupando el espacio, igual que en Yazmin */}
        <div className="relative w-full aspect-[3/4] md:h-auto bg-white flex items-center justify-center p-8">
          <div className="relative w-full h-full max-w-md md:max-w-full">
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
        {/* Fondo gris suave para simular la textura del papel */}
        <div className="relative flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-gray-50 text-foreground">
          
          <div className="max-w-lg mx-auto md:mx-0">
            {/* Título en Magenta */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#c026d3] uppercase tracking-wide mb-8">
              CAMILA VICENTE
            </h2>

            {/* Texto con espaciado y negritas específicas */}
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-800">
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

              <p className="font-bold text-black">
                Creo en las marcas que tienen algo para decir, y mi trabajo es ayudarlas a hacerlo de la mejor manera posible.
              </p>
            </div>

            {/* Avatar Pequeño Alineado a la Derecha */}
            <div className="relative mt-12 flex justify-end">
              <div className="relative w-fit">
                {/* Elemento decorativo rosa detrás en la esquina derecha */}
                <div 
                  className="absolute -bottom-4 -right-4 w-28 h-28 bg-pink-300 rotate-12 -z-10 opacity-90" 
                  style={{ clipPath: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)' }}
                ></div>
                
                <Image
                  src="/About-us/resources/camiyaska.png"
                  alt="Ilustración Camila"
                  width={110} // Un poco más grande para destacar
                  height={110}
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