import Image from "next/image"

export function ContactoHero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center min-h-[500px] lg:min-h-[600px] xl:min-h-[650px]"
      style={{
        backgroundImage: 'url("/Home/resources/negroyaska.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left: illustration */}
      <div className="absolute left-[-30%] sm:left-[-15%] md:left-[-10%] lg:left-0 xl:left-[2%] top-1/2 -translate-y-1/2 w-[180px] sm:w-[250px] md:w-[350px] lg:w-[480px] xl:w-[500px] pointer-events-none drop-shadow-2xl z-10 -rotate-[15deg] origin-center opacity-40 md:opacity-100 transition-opacity">
        <Image
          src="/Home/resources/telefonoyaska.png"
          alt="Celular YASKA"
          width={600}
          height={800}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 py-16 flex flex-col items-center justify-center">
        {/* Center: text */}
        <div className="text-center max-w-3xl px-6 py-10 rounded-3xl bg-black/60 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none transition-all">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold mb-4 lg:mb-6 leading-tight drop-shadow-lg" style={{ color: "#EAC2D5" }}>
            ¡Estamos aquí para ayudarte!
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed text-zinc-100 font-medium max-w-[600px] mx-auto drop-shadow-md">
            Comunicate con nosotras a través de los siguientes
            medios para resolver cualquier duda o coordinar tu
            próximo proyecto.
          </p>
        </div>
      </div>

      {/* Right: illustration */}
      <div className="absolute right-[-15%] sm:right-[-5%] md:right-0 lg:right-[5%] xl:right-[8%] bottom-0 w-[140px] sm:w-[180px] md:w-[250px] lg:w-[340px] pointer-events-none flex items-end drop-shadow-2xl z-10 opacity-40 md:opacity-100 transition-opacity">
        <Image
          src="/Home/resources/C&YFooter.png"
          alt="Personajes YASKA"
          width={800}
          height={800}
          className="w-full h-auto object-contain object-bottom"
          priority
        />
      </div>
    </section>
  )
}
