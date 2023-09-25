"use client"

import React from "react"
import section from "@/styles/section-divider.module.css"
import { motion } from "framer-motion"

export default function SectionDivider() {
    return (
        <div className={section.position}>
            <motion.div className={section.format} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.125 }}></motion.div>
        </div>
    )
}
