"use client"

import Image from "next/image"
import React from "react"
import intro from "@/styles/intro.module.css"
import Link from "next/link"
import { motion } from "framer-motion"
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { useSectionInView } from "@/lib/hooks"

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5)

    return (
        <section className={intro.section} ref={ref} id="home">
            <div className={intro.position}>
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.3 }}>
                    <Image className={intro.image} src="/niferu.jpg" alt="Niferu" height="200" width="200" quality="95" priority={true} />
                </motion.div>
            </div>

            <motion.h1 className={`${intro.position} ${intro.text}`} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
                Hello I'm Patryk and I'm full-stack blockchain developer focused on web 3.0
            </motion.h1>

            <motion.div
                className={`${intro.position} ${intro.links}`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link className={intro.button} href="#contact">
                    Contact me here <BsArrowRight className={intro.arrow} />
                </Link>
                <a className={intro.button} href="/CV.pdf" download>
                    Download CV <HiDownload className={intro.icon} />
                </a>
                <a className={`${intro.button} ${intro.sbutton}`} href="https://www.linkedin.com/in/patryk-wargacki-946401190/" target="_blank">
                    <BsLinkedin />
                </a>
                <a className={`${intro.button} ${intro.sbutton}`} href="https://github.com/Neftyr" target="_blank">
                    <BsGithub />
                </a>
            </motion.div>
        </section>
    )
}
