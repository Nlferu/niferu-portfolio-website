"use client"

import Image from "next/image"
import React from "react"
import intro from "@/styles/intro.module.css"
import { motion } from "framer-motion"

export default function Intro() {
    return (
        <section className={intro.section}>
            <div className={intro.position}>
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.3 }}>
                    <Image className={intro.image} src="/niferu.jpg" alt="Niferu" height="200" width="200" quality="95" priority={true} />
                </motion.div>
            </div>

            <motion.p className={`${intro.position} ${intro.text}`} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
                Hello I'm Patryk and I'm full-stack blockchain developer focused on web 3.0
            </motion.p>
        </section>
    )
}
