import Image from "next/image"
import { CheckeredStripe } from "@/components/checkered-stripe"

export function AboutHero() {
  return (
    <section className="relative w-full bg-white">
      
      {/* CONTENEDOR AUTO-ADAPTABLE (Mantiene la proporción 1366/814) */}
      <div className="relative w-full h-[600px] md:h-auto md:aspect-[1366/814]">
        
        {/* IMAGEN DE FONDO */}
        <Image
          src="/About-us/images/Yaska-hero.jpg"
          alt="Camila y Yazmin Hero"
          fill
          priority
          className="object-cover object-center" 
        />

        {/* CAPA DE TEXTO (Overlay) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          
          {/* PADDING RESPONSIVO:
              - px-6 en móvil
              - md:px-8 en tablet
              - lg:px-16 en desktop
              Esto asegura que el texto tenga aire a la izquierda.
          */}
          <div className="w-full h-full flex flex-col justify-center md:justify-start px-6 md:px-8 lg:px-16 xl:px-20 pt-[15%] md:pt-[8%]">
            
            {/* --- BLOQUE DE TEXTO PROTEGIDO --- */}
            {/* CLAVE 1: max-w-[45%]. 
                Esto crea una barrera invisible. El texto NUNCA pasará del 45% del ancho de la pantalla,
                protegiendo la zona derecha donde están las chicas. 
            */}
            <div className="pointer-events-auto mr-auto w-full md:max-w-[48%] lg:max-w-[42%] xl:max-w-[40%]">
              
              <div className="space-y-1 md:space-y-2">
                {/* TEXTO 1: Adaptable */}
                <p className="font-sans font-medium text-gray-900 leading-tight
                  text-xl           {/* Móvil */}
                  md:text-lg        {/* Tablet: Bajamos tamaño para que quepa */}
                  lg:text-2xl       {/* Laptop */}
                  xl:text-3xl       {/* Desktop Grande */}
                ">
                  “Amigas de toda la vida,
                </p>
                
                {/* TÍTULO PRINCIPAL: Fluid Typography */}
                <p className="font-black text-[#d946ef] leading-none tracking-tight py-1
                  text-4xl          {/* Móvil */}
                  md:text-4xl       {/* Tablet: Contenido */}
                  lg:text-6xl       {/* Laptop: Grande */}
                  xl:text-7xl       {/* Desktop: Gigante */}
                ">
                  HOY SOCIAS,
                </p>
                
                {/* TEXTO 2: Adaptable */}
                <p className="font-sans font-medium text-gray-900 leading-tight
                  text-xl           {/* Móvil */}
                  md:text-lg        {/* Tablet */}
                  lg:text-2xl       {/* Laptop */}
                  xl:text-3xl       {/* Desktop */}
                ">
                  acompañando marcas <br className="hidden lg:block"/> en cada etapa de su <br className="hidden lg:block"/> camino...”
                </p>
              </div>

              {/* Decoración Corazón y Dibujos */}
              <div className="mt-2 md:mt-4 pl-2">
                 <span className="block -rotate-12 font-handwriting font-bold text-black opacity-80 mb-2
                   text-2xl md:text-xl lg:text-3xl
                 ">
                   {'<3'}
                 </span>
                 
                 {/* El dibujo también se achica en pantallas medianas para no molestar */}
                 <div className="relative 
                   w-40 h-40         {/* Móvil */}
                   md:w-32 md:h-32   {/* Tablet: Más pequeño para no tapar */}
                   lg:w-52 lg:h-52   {/* Laptop */}
                   xl:w-64 xl:h-64   {/* Desktop */}
                 ">
                  <Image
                    src="/About-us/resources/C&Yaboutus.png"
                    alt="Personajes Camila y Yazmin Cartoon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* NOTA DERECHA */}
            <div className="hidden md:block pointer-events-auto absolute top-[12%] right-4 lg:right-12 w-[150px] lg:w-[250px] text-right">
              <p className="text-[9px] lg:text-xs leading-tight font-bold text-black uppercase tracking-wide opacity-70">
                (CONSULTAR LA OPCION DE FORMATO EN CARROUSEL/SLIDER DEL FONDO, PARA APROVECHAR MAS FOTOS JUNTAS SACADAS)
              </p>
            </div>

          </div>
        </div>
      </div>

      <CheckeredStripe />
    </section>
  )
}