"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { skillsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },

    animate: (index: number) => ({
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
        <section ref={ref} id="skills">
            <SectionHeading>My skills</SectionHeading>
            <div className="flex justify-center">
                <div className="flex justify-center flex-wrap w-full  lg:w-1/2">
                    {skillsData.map((skill, index) => (
                        <motion.li
                            className="flex flex-col justify-end items-center text-center w-[5rem] h-[5rem] m-[1rem] mb-[0.5rem]"
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                            key={index}
                        >
                            <Link className="mb-[1rem]" href={skill.href} target="_blank">
                                <Image src={skill.imageUrl} alt={skill.title} quality={95} width={skill.width} height="0" />
                            </Link>
                            <h4 className="text-stone-950 dark:text-white text-[0.8rem]">{skill.title}</h4>
                        </motion.li>
                    ))}
                </div>
            </div>
        </section>
    )
}
