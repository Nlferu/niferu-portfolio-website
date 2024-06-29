"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

export default function About() {
    const { ref } = useSectionInView("About", 0.7)

    return (
        <motion.section
            className="max-w-[50rem] text-center sm:mb-0"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            ref={ref}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="text-stone-950 dark:text-gray-400 font-medium mb-5 text-lg flex flex-col">
                I&apos;ve spent the past eight years mastering the finance industry. My interests in trading across diverse markets like stocks, crypto,
                futures, and more pushed me into learning programming so I could test and automate my trading ideas. The ability to check all my strategies and
                ideas very quickly using code made me love programming.
                <span className="my-4">
                    I have finally come to realize that blockchain is this great mix of finance, programming, and decentralization a perfect fit for my skills
                    and passions. That made me start learning more languages and frameworks that allowed me to create applications within web 3.0 from start to
                    end. I&apos;m currently applying my skills by fully committing to these new technologies working as a blockchain engineer.
                </span>
            </p>
            <p className="text-stone-950 dark:text-gray-400 font-medium text-lg">
                When I&apos;m not programming I like playing blitz and bullet chess, video games or do skateboarding!
            </p>
        </motion.section>
    )
}
