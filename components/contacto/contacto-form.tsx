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
    const formTarget = e.currentTarget

    setStatus("submitting")
    setErrorMessage("")

    try {
      // 1. Extraemos los datos del formulario a un objeto plano
      const formDataInstance = new FormData(formTarget);
      
      // HONEYPOT TRAMPA PARA BOTS: si botcheck está marcado, fingimos éxito y cortamos
      if (formDataInstance.get("botcheck")) {
        setStatus("success");
        formTarget.reset();
        setTimeout(() => setStatus("idle"), 6000);
        return; // Sale sin gastar requests HTTP!
      }

      const data = Object.fromEntries(formDataInstance.entries());

      // 2. Agregamos la Access Key y configuraciones (Asegurate que empiece con NEXT_PUBLIC_)
      // 2. Construimos el payload como un objeto JavaScript bien formado
      const payload = {
        ...data,
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
        subject: "Nuevo mensaje de web YASKA",
        from_name: "YASKA Contacto"
      };

      // 3. Enviamos explícitamente como JSON
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        formTarget.reset();
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        // Web3Forms suele enviar el motivo del error en result.message
        setStatus("error");
        setErrorMessage(result.message || "Error al enviar el formulario.");
      }
    } catch (error) {
      console.error("🔥🔥 ERROR DE RED:", error);
      setStatus("error");
      setErrorMessage("Error de conexión. Revisa tu red.");
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
