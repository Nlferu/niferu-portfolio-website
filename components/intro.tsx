"use client"

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

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
        </section>
    )
}
