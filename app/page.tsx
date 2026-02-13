import { HomeHero } from "@/components/home/home-hero"
import { HomeAbout } from "@/components/home/home-about"
import { HomeServices } from "@/components/home/home-services"
import { HomeCTA } from "@/components/home/home-cta"

export default function Page() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeCTA />
    </>
  )
}
