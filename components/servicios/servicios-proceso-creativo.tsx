"use client"

import { useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

export function ServiciosProcesoCreativo() {
    return (
        <section className="relative w-full py-16 md:py-24 bg-cover bg-center" style={{ backgroundImage: 'url("/Home/resources/negroyaska.jpg")' }}>
            <div className="mx-auto max-w-6xl px-4 md:px-6 flex flex-col items-center">
                {/* Texts */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white text-center mb-4 uppercase tracking-wide">
                    Proceso Creativo
                </h2>
                <p className="text-white/90 text-center max-w-2xl text-[14px] md:text-[15px] mb-10 md:mb-14 font-medium leading-relaxed">
                    Te mostramos el detrás de escena de cómo trabajamos con nuestras marcas: ideas
                    en proceso, días de producción y momentos reales de creación.
                </p>

                {/* Video Box */}
                <div className="w-full bg-[#F9E0E3] rounded-[2rem] p-4 md:p-8 shadow-xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <VideoCard src="/Services/resources/copy_E6487299-28DA-479F-811E-1D6CFE888EE8.mov" />
                        <VideoCard src="/Services/resources/copy_C4DFFD3F-95E2-4B14-B0DF-3DFF781725BE.mov" />
                        <VideoCard src="/Services/resources/copy_50714A81-B0CB-434A-916A-5A4834150BFD.mov" />
                        <VideoCard src="/Services/resources/5246F891-DE30-4D39-BE49-DE85A8A9911A.mov" />
                    </div>
                </div>
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
