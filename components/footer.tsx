import { Mail } from "lucide-react"
import Image from "next/image"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-6">
          <div className="relative w-32 h-12">
            <Image
              src={"https://res.cloudinary.com/dw04wgk6k/image/upload/v1773784036/white_logotype_p0qd0b.png"}
              alt="YASKA Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden sm:block h-10 w-px bg-white/20" />
          <p className="hidden sm:block text-xs text-white/60 leading-relaxed font-medium">
            Agencia creativa | Buenos<br />
            Aires, Argentina
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/yaska.digital/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-[#f9c6d9] transition-colors"
          >
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/yaska-digital/about/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-[#f9c6d9] transition-colors"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a
            href="mailto:yaskadigitall@gmail.com"
            aria-label="Email"
            className="text-white hover:text-[#f9c6d9] transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}
