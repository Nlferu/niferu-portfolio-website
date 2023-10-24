"use client"

import React from "react"
import { motion } from "framer-motion"

export default function SectionDivider() {
    return (
        <div className="flex relative justify-center">
            <motion.div
                className="hidden sm:block mt-28 mb-[-1rem] h-20 w-1 bg-black bg-opacity-60 rounded-full"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
            ></motion.div>
        </div>
    )
}
