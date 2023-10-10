"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import SectionHeading from "./section-heading"
import skillsStyle from "@/styles/skills.module.css"
import { motion } from "framer-motion"
import { skillsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },

    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
}

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.5)

    return (
        <section className={skillsStyle.section} ref={ref} id="skills">
            <SectionHeading>My skills</SectionHeading>
            <div className={skillsStyle.containerPos}>
                <div className={skillsStyle.skillsContainer}>
                    {skillsData.map((skill, index) => (
                        <motion.li
                            className={skillsStyle.box}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                            key={index}
                        >
                            <Link href={skill.href} target="_blank" alt={skill.title}>
                                <Image src={skill.imageUrl} alt={skill.title} quality={95} width={skill.width} height={skill.height} />
                            </Link>
                            <h4>{skill.title}</h4>
                        </motion.li>
                    ))}
                </div>
            </div>
        </section>
    )
}
