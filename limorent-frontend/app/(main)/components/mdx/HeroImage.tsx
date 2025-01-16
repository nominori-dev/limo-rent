import React from "react"
import Image from "next/image"

export default function HeroImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div className={"relative h-[200px] sm:h-[500px] mx-auto max-w-[60%] sm:max-w-[80%] pb-5"}>
            <Image className={"rounded-xl bg-center bg-cover"} src={src} alt={alt} fill></Image>
        </div>
    )
}