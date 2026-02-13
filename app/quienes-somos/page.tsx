import { AboutHero } from "@/components/about/about-hero"
import { AboutCamila } from "@/components/about/about-camila"
import { AboutYazmin } from "@/components/about/about-yazmin"
import { CheckeredStripe } from "@/components/checkered-stripe"

export default function QuienesSomosPage() {
  return (
    <>
      <AboutHero />
      <AboutCamila />
      <CheckeredStripe />
      <AboutYazmin />
      <CheckeredStripe />
    </>
  )
}
