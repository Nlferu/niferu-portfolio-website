"use client"

import Image from "next/image"
import React from "react"
import Link from "next/link"
import Typed from "react-typed"
import { motion } from "framer-motion"
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5)
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <section className={"max-w-[51rem] text-center sm:mb-0 scroll-mt-[100rem]"} ref={ref} id="home">
            <div className="flex items-center justify-center py-[1rem]">
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.3 }}>
                    <Image
                        className="w-[9rem] h-[9rem] object-fit rounded-full shadow-xl border-lotr dark:border-las border-[0.05rem]"
                        src="/niferu.jpg"
                        alt="Niferu"
                        height="200"
                        width="200"
                        quality="95"
                        priority={true}
                    />
                </motion.div>
            </div>

            <motion.p
                className="text-center text-lotr dark:text-zinc-50 py-[2rem] !leading-[1.5] text-2xl sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Hello, I&apos;m Patryk and I&apos;m{" "}
                <span className="text-lord dark:text-god underline decoration-2 underline-offset-2">full-stack developer</span> focused on web 3.0 with vast
                knowledge
                <span className="block ml-[0.5rem]">
                    in fields like
                    <Typed
                        className="ml-[0.5rem] text-nite dark:text-alfa"
                        strings={["Trading", "Finances", "Chess", "Gaming"]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                        // showCursor={false}
                    />
                </span>
            </motion.p>

            <motion.div
                className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-[2rem]"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    className="group flex items-center gap-2 px-[1.5rem] py-[1.1rem] font-bold text-nite hover:text-lord dark:text-alfa dark:hover:text-god borderBlack borderDevil bg-stone-400 dark:bg-black bg-opacity-40 dark:bg-opacity-80 rounded-full focus:scale-110 hover:scale-110 hover:bg-stone-500 dark:hover:bg-black dark:hover:bg-opacity-95 active:scale-105 duration-custom ease-customBezier hover:translate-y-[-4px]"
                    href="#contact"
                    onClick={() => {
                        setActiveSection("Contact")
                        setTimeOfLastClick(Date.now())
                    }}
                >
                    Contact me here <BsArrowRight className="opacity-60 group-hover:translate-x-[0.3rem] transition" />
                </Link>
                <a
                    className="group flex items-center gap-2 px-[1.5rem] py-[1.1rem] font-bold text-nite hover:text-lord dark:text-alfa dark:hover:text-god borderBlack borderDevil bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-50 rounded-full focus:scale-110 hover:scale-110 hover:bg-white dark:hover:bg-devil active:scale-105 duration-custom ease-customBezier hover:translate-y-[-4px]"
                    href="/CV.pdf"
                    download
                >
                    Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>
                <a
                    className="flex items-center gap-2 p-[1.15rem] text-lg text-nite hover:text-lord dark:text-alfa dark:hover:text-god borderBlack borderDevil bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-50 rounded-full focus:scale-110 hover:scale-[1.2] hover:bg-white dark:hover:bg-devil active:scale-110 duration-custom ease-customBezier hover:translate-y-[-4px]"
                    href="https://www.linkedin.com/in/patryk-wargacki-946401190/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a
                    className="flex items-center gap-2 p-[1.012rem] text-[1.4rem] text-nite hover:text-lord dark:text-alfa dark:hover:text-god borderBlack borderDevil bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-50 rounded-full focus:scale-110 hover:scale-[1.2] hover:bg-white dark:hover:bg-devil active:scale-110 duration-custom ease-customBezier hover:translate-y-[-4px]"
                    href="https://github.com/Nlferu"
                    target="_blank"
                >
                    <BsGithub />
                </a>
            </motion.div>
        </section>
    )
}
