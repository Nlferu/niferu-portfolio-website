import Image from "next/image"
import React from "react"
import intro from "@/styles/intro.module.css"

export default function Intro() {
    return (
        <section>
            <div className={intro.div}>
                <div className={intro.secDiv}>
                    <Image className={intro.image} src="/niferu.jpg" alt="Niferu" height="200" width="200" quality="95" priority={true} />
                </div>
            </div>
        </section>
    )
}
