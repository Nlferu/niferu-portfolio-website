"use client"

import Image from "next/image"
import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"

export default function Intro() {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.3 }}>
                        <Image
                            className="h-24 w-24 rounded-full object-cover border-[0.35] border-white shadow-xl"
                            src="/niferu.jpg"
                            alt="Niferu"
                            height="200"
                            width="200"
                            quality="95"
                            priority={true}
                        />
                    </motion.div>
                </div>
            </div>

            <motion.p
                className="mb-10 mt-4 px-4 !text-2xl font-semibold !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Hello I'm Patryk and I'm full-stack blockchain developer focused on web 3.0
            </motion.p>

            <motion.div
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    href="#contact"
                >
                    Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
                <a
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    href="/CV.pdf"
                    download
                >
                    Download CV <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
                </a>
                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://www.linkedin.com/in/patryk-wargacki-946401190/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a
                    className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/Neftyr"
                    target="_blank"
                >
                    <BsGithub />
                </a>
            </motion.div>
        </section>
    )
}
