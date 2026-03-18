"use client"

import { useState } from "react"
import Image from "next/image"
import { YaskaButton } from "@/components/ui/yaska-button"
import { ScrollReveal } from "@/components/scroll-reveal"

// Web3Forms: Obtené tu access key gratis en https://web3forms.com (se envía a tu email)
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "TU_ACCESS_KEY_AQUI"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ContactoForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Nuevo mensaje de contacto de ${formData.nombre} ${formData.apellido}`,
          from_name: "YASKA Web",
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.email,
          telefono: formData.telefono || "No proporcionado",
          mensaje: formData.mensaje,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          mensaje: "",
        })
      } else {
        setStatus("error")
        setErrorMessage(result.message || "Hubo un error al enviar el formulario. Intentá de nuevo.")
      }
    } catch {
      setStatus("error")
      setErrorMessage("Error de conexión. Verificá tu internet e intentá de nuevo.")
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
              {/* Form fields wrapper card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 space-y-6 shadow-sm border border-white/50 relative z-20">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1">
                    <label
                      htmlFor="nombre"
                      className="block text-xs font-semibold text-gray-700 mb-2"
                    >
                      Nombre <span className="text-[#FFA8E2]">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className={inputClass}
                      disabled={status === "submitting"}
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="apellido"
                      className="block text-xs font-semibold text-gray-700 mb-2"
                    >
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      className={inputClass}
                      disabled={status === "submitting"}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-gray-700 mb-2"
                  >
                    Correo Electrónico <span className="text-[#FFA8E2]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    disabled={status === "submitting"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-xs font-semibold text-gray-700 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className={inputClass}
                    disabled={status === "submitting"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-xs font-semibold text-gray-700 mb-2"
                  >
                    Mensaje de consulta <span className="text-[#FFA8E2]">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className={`${inputClass} resize-vertical`}
                    disabled={status === "submitting"}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <YaskaButton
                  type="submit"
                  disabled={status === "submitting"}
                >
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
