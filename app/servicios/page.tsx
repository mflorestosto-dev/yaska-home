import { ServiciosHero } from "@/components/servicios/servicios-hero"
import { ServiciosList } from "@/components/servicios/servicios-list"
import { ServiciosProcesoCreativo } from "@/components/servicios/servicios-proceso-creativo"

export default function ServiciosPage() {
  return (
    <>
      <ServiciosHero />
      <ServiciosList />
      <ServiciosProcesoCreativo />
    </>
  )
}
