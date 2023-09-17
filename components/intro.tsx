import Image from "next/image"
import React from "react"

export default function Intro() {
    return (
        <section>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <Image
                        className="h-24 w-24 rounded-full object-cover border-[0.35] border-white shadow-xl"
                        src="/niferu.jpg"
                        alt="Niferu"
                        height="200"
                        width="200"
                        quality="95"
                        priority={true}
                    />
                </div>
            </div>
        </section>
    )
}
