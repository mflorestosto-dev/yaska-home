"use client"

import { useRef, useState } from "react"
import { Play, Pause } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ServiciosProcesoCreativo() {
    return (
        <section className="relative w-full py-16 md:py-24 bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dw04wgk6k/image/upload/v1773783135/negroyaska_olieeo.jpg")' }}>
            <div className="mx-auto max-w-6xl px-4 md:px-6 flex flex-col items-center">
                {/* Texts */}
                <ScrollReveal animation="fade-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white text-center mb-4 uppercase tracking-wide">
                        Proceso Creativo
                    </h2>
                    <p className="text-white/90 text-center max-w-2xl text-[14px] md:text-[15px] mb-10 md:mb-14 font-medium leading-relaxed">
                        Te mostramos el detrás de escena de cómo trabajamos con nuestras marcas: ideas
                        en proceso, días de producción y momentos reales de creación.
                    </p>
                </ScrollReveal>

                {/* Video Box */}
                <ScrollReveal animation="scale-in" delay={200}>
                    <div className="w-full bg-[#F9E0E3] rounded-[2rem] p-4 md:p-8 shadow-xl">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            <VideoCard src="https://res.cloudinary.com/dw04wgk6k/video/upload/v1773783684/video1_rjtoyh.mp4" />
                            <VideoCard src="https://res.cloudinary.com/dw04wgk6k/video/upload/v1773783683/video2_ifciux.mp4" />
                            <VideoCard src="https://res.cloudinary.com/dw04wgk6k/video/upload/v1773783681/video4_oht3dg.mp4" />
                            <VideoCard src="https://res.cloudinary.com/dw04wgk6k/video/upload/v1773783679/video3_ne12xl.mp4" />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

function VideoCard({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
        }
    }

    return (
        <div
            className="relative w-full aspect-[9/16] bg-black/10 rounded overflow-hidden cursor-pointer group shadow-sm"
            onClick={togglePlay}
        >
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover"
                playsInline
                loop
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
            />

            {/* Play/Pause Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-black/40 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                    {isPlaying ? (
                        <Pause className="w-6 h-6 flex-shrink-0" fill="currentColor" />
                    ) : (
                        <Play className="w-6 h-6 ml-1 flex-shrink-0" fill="currentColor" />
                    )}
                </div>
            </div>
        </div>
    )
}
