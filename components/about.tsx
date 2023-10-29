"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

export default function About() {
    const { ref } = useSectionInView("About", 1)

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
            <p className="text-stone-950 dark:text-gray-400 font-medium mb-5 text-lg">
                I've spent past 7 years mastering finance industry by working for some of the top American banks in investment sector and trading various
                markets on my own. Since mid of 2020 I have started my programming journey from taking beginner Java course, after which I moved into
                programming trading bots and indicators for forex market. My next step was delving into the exciting world of blockchain technology, exploring
                its endless possibilities since early 2022 until now. I am highly motivated, self-driven, and detail-oriented.
            </p>
            <p className="text-stone-950 dark:text-gray-400 font-medium text-lg">
                When I'm not programming I like playing blitz and bullet chess, video games or do skateboarding!
            </p>
        </motion.section>
    )
}
