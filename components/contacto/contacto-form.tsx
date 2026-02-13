"use client"

import { useState } from "react"
import { ImagePlaceholder } from "@/components/image-placeholder"

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

  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Form */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-lg md:text-xl font-bold text-foreground leading-snug">
              Completa el formulario a continuacion y nos
              pondremos en contacto contigo lo antes posible.
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="nombre"
                    className="block text-xs font-medium text-foreground/70 mb-1"
                  >
                    Nombre <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="apellido"
                    className="block text-xs font-medium text-foreground/70 mb-1"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-foreground/70 mb-1"
                >
                  Correo Electronico <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="telefono"
                  className="block text-xs font-medium text-foreground/70 mb-1"
                >
                  Telefono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-xs font-medium text-foreground/70 mb-1"
                >
                  Mensaje de consulta <span className="text-primary">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={6}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-foreground px-10 py-3 text-sm font-bold uppercase tracking-wider text-background transition-colors hover:bg-foreground/80"
              >
                ENVIAR
              </button>
            </form>
          </div>

          {/* Right: Decorative illustration placeholder */}
          <div className="flex-1 hidden md:flex items-center justify-center">
            <ImagePlaceholder
              label="Ilustracion decorativa patron"
              className="w-full max-w-md h-96"
              aspectRatio=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
