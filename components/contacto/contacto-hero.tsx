import Image from "next/image"

export function ContactoHero() {
  return (
    <section className="relative w-full bg-white">
      {/* IMAGEN HERO COMPLETA Y RESPONSIVA */}
      <div className="w-full">
        <Image
          src="/Contact/images/Contact-hero.jpg"
          alt="Contacto Hero YASKA"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto"
        />
      </div>
    </section>
  )
}
