"use client"

import React, { useEffect } from "react"
import SectionHeading from "./section-heading"
import about from "@/styles/about.module.css"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function About() {
    const { ref, inView } = useInView({
        /** @dev If 100% (as it is very small so far) of content is in view bool will be true */
        threshold: 1,
    })
    const { setActiveSection } = useActiveSectionContext()

    useEffect(() => {
        if (inView) {
            setActiveSection("About")
        }
    }, [inView, setActiveSection])

    return (
        <motion.section
            className={about.section}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            ref={ref}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <p className={about.text}>
                I've spent past 7 years mastering finance industry by working for some of the top American banks in investment sector and trading various
                markets on my own. Since mid of 2020 I have started my programming journey from taking beginner Java course, after which I moved into
                programming trading bots and indicators for forex market. My next step was delving into the exciting world of blockchain technology, exploring
                its endless possibilities since early 2022 until now. I am highly motivated, self-driven, and detail-oriented.
            </p>
            <p className={about.text}>When I'm not programming I like playing blitz and bullet chess, video games or do skateboarding!</p>
        </motion.section>
    )
}
