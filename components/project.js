"use client"

import Image from "next/image"
import project from "@/styles/project.module.css"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Project({ title, description, tags, imageUrl }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.33 1"] })

    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 0.9])
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.2, 0.7])

    return (
        <motion.div
            className={project.motion}
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
        >
            <section className={project.section}>
                <div className={project.div}>
                    <h3 className={project.h3}>{title}</h3>
                    <p className={project.p}>{description}</p>
                    <ul className={project.ul}>
                        {tags.map((tag, index) => (
                            <li className={project.li} key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <Image className={project.image} src={imageUrl} alt="Project I worked on" quality={95} />
            </section>
        </motion.div>
    )
}
