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
                With over eight years of experience in the finance industry, including working for top American banks in the investment sector and trading
                various markets independently, I developed a strong interest in trading diverse assets like stocks, crypto, and futures. This passion pushed me
                to learn programming so I could test and automate my trading ideas. The ability to quickly validate my strategies using code made me fall in
                love with programming.
                <span className="my-4">
                    I have finally come to realize that blockchain is this great mix of finance, programming, and decentralization a perfect fit for my skills
                    and passions. That made me start learning more languages and frameworks that allowed me to create applications within web 3.0 from start to
                    end. I&apos;m currently applying my skills by fully committing to these new technologies working as a{" "}
                    <span className="text-darklord dark:text-orange-400 underline decoration-2 underline-offset-2">blockchain and backend engineer</span>.
                </span>
            </p>
            <p className="text-stone-950 dark:text-gray-400 font-medium text-lg">
                When I&apos;m not programming I like playing blitz and bullet chess, video games or do skateboarding!
            </p>
        </motion.section>
    )
}
