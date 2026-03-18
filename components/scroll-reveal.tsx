"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in"

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
  threshold?: number
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold })

  return (
    <div
      ref={ref}
      className={`animate-on-scroll anim-${animation} ${isVisible ? "is-visible" : ""} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
