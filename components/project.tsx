"use client"

import Image from "next/image"
import Link from "next/link"
import { projectsData } from "@/lib/data"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import project from "@/styles/project.module.css"

type ProjectProps = typeof projectsData[number]

export default function Project({ title, description, tags, imageUrl, href }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.33 1"] })

    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.3, 1])

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
                <Link href={href} target="_blank">
                    <Image className={project.image} src={imageUrl} alt="Project I worked on" quality={95} />
                </Link>
            </section>
        </motion.div>
    )
}
