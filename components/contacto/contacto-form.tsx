"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { YaskaButton } from "@/components/ui/yaska-button"
import { ScrollReveal } from "@/components/scroll-reveal"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ContactoForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Guardar una referencia fuerte al formulario antes de cualquier await
    // ya que React nulifica e.currentTarget asíncronamente.
    const formTarget = e.currentTarget

    setStatus("submitting")
    setErrorMessage("")

    try {
      // 100% Official Web3Forms React Implementation
      const formData = new FormData(formTarget)
      // En Client Components de Next.js es vital usar NEXT_PUBLIC_
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "")

      // Configuración opcional sugerida por Web3Forms
      formData.append("subject", "Nuevo mensaje de web YASKA")
      formData.append("from_name", "YASKA Contacto")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })

      // Simplemente validar si la petición HTTP tuvo éxito sin tratar de parsear JSON estrictamente
      // Esto evita que salte el catch si un adblocker o Web3Forms devuelve un formato alterado/HTML
      if (response.ok) {
        setStatus("success")
        formTarget.reset() // Limpia el formulario nativo usando la referencia guardada
        // Auto-esconder mensaje a los 6 segundos
        setTimeout(() => setStatus("idle"), 6000)
      } else {
        setStatus("error")
        setErrorMessage("Error al conectar con el servidor.")
      }
    } catch (error) {
      console.error("🔥🔥 ERROR REAL DEL FETCH DE WEB3FORMS:", error)
      setStatus("error")
      setErrorMessage("Bloqueo de red (Revisá la consola).")
    }
  }

  const inputClass = "w-full rounded-lg border-2 border-gray-100 bg-white px-4 py-3 text-sm text-black outline-none focus:border-[#FFA8E2] transition-all shadow-[3px_3px_0_0_#FFA8E2]"

  return (
    <section className="relative w-full overflow-hidden flex min-h-[600px] bg-[#F7D0D8]">
      {/* Full background illustration */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="https://res.cloudinary.com/dw04wgk6k/image/upload/v1773782779/fondo_rosa2w_jdghod.jpg"
          alt="Patron decorativo YASKA"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-10 h-full">
          {/* Left: Form */}
          <div className="flex-1 max-w-2xl w-full">
            <ScrollReveal animation="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-8 max-w-[500px]">
                Completá el formulario a continuación y nos
                pondremos en contacto contigo lo antes posible.
              </h2>

              {/* Success Message */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 border-2 border-green-200 text-green-800 font-medium text-sm">
                  ✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </div>
              )}

              {/* Error Message */}
              {(status === "error" || errorMessage) && status !== "success" && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border-2 border-red-200 text-red-800 font-medium text-sm">
                  ❌ {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Web3Forms honeypot anti-spam */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                {/* Form fields wrapper card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 space-y-6 shadow-sm border border-white/50 relative z-20">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1">
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-2">
                        Nombre completo <span className="text-[#FFA8E2]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={inputClass}
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-2">
                      Correo Electrónico <span className="text-[#FFA8E2]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={inputClass}
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={inputClass}
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-2">
                      Mensaje de consulta <span className="text-[#FFA8E2]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={`${inputClass} resize-vertical`}
                      disabled={status === "submitting"}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <YaskaButton type="submit" disabled={status === "submitting"}>
                    {status === "submitting" ? "ENVIANDO..." : "ENVIAR"}
                  </YaskaButton>
                </div>
              </form>
            </ScrollReveal>
          </div>

          {/* Spacer for the right side */}
          <div className="hidden md:block flex-1 pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
