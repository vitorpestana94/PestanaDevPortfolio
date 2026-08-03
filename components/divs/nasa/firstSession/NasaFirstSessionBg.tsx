"use client";

import Grainient from "@/components/backgrounds/Grainient";

export default function NasaFirstSessionBg({ children } : { children: React.ReactNode }){
    return (
        <section className="min-h-dvh relative pt-32 lg:pt-16 z-40 flex flex-col">
             <div className="absolute inset-0 -z-10 opacity-60">
                <Grainient
                    color1="#2B2B2B"
                    color2="#4A4A4A"
                    color3="#2B2B2B"
                    timeSpeed={0.85}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={3}
                    warpAmplitude={50}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={true}
                    contrast={1.5}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
             </div>
             {children}
        </section>
    )
}