"use client"

import { useState } from "react"
import Image from "next/image"

export function ContactoForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const inputClass = "w-full rounded-lg border-2 border-gray-100 bg-white px-4 py-3 text-sm text-black outline-none focus:border-[#FFA8E2] transition-all shadow-[3px_3px_0_0_#FFA8E2]"

  return (
    <section className="relative w-full overflow-hidden flex min-h-[600px] bg-[#F7D0D8]">
      {/* Full background illustration */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/Contact/resources/fondo rosa2w.jpg"
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
            <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-8 max-w-[500px]">
              Completá el formulario a continuación y nos
              pondremos en contacto contigo lo antes posible.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields wrapper card with glassmorphism to let the pink through slightly */}
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
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-block rounded-[30px] border-2 border-black bg-[#FFA8E2] px-10 py-3 text-sm font-bold uppercase tracking-wider text-black transition-transform hover:translate-y-[-2px] hover:shadow-[0_4px_0_0_#000000] shadow-[0_2px_0_0_#000000]"
                >
                  ENVIAR
                </button>
              </div>
            </form>
          </div>

          {/* Spacer for the right side */}
          <div className="hidden md:block flex-1 pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
