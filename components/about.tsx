"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"

export default function About() {
    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                I've spent past 7 years mastering finance industry by working for some of the top American banks in investment sector and trading various
                markets on my own. Since mid of 2020 I have started my programming journey from taking beginner Java course, after which I moved into
                programming trading bots and indicators for forex market. My next step was delving into the exciting world of blockchain technology, exploring
                its endless possibilities since early 2022 until now. I am highly motivated, self-driven, and detail-oriented.
            </p>
            <p>When I'm not coding I like playing blitz and bullet chess, video games or do skateboarding!</p>
        </motion.section>
    )
}
