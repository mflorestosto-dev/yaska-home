import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface YaskaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string
    children: React.ReactNode
    className?: string
}

export const YaskaButton = React.forwardRef<HTMLButtonElement, YaskaButtonProps>(
    ({ href, children, className, ...props }, ref) => {
        const baseClasses = cn(
            "group relative inline-flex items-center justify-center font-bold text-black uppercase tracking-wider bg-[#f9c6d9] border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] transition-all text-sm md:text-lg px-6 py-3 md:px-10 md:py-4",
            className
        )

        if (href) {
            return (
                <Link href={href} className={baseClasses}>
                    {children}
                </Link>
            )
        }

        return (
            <button ref={ref} className={baseClasses} {...props}>
                {children}
            </button>
        )
    }
)

YaskaButton.displayName = "YaskaButton"
