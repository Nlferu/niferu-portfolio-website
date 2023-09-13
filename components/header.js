"use client"

import Link from "next/link"
import header from "@/styles/header.module.css"
import { motion } from "framer-motion"

export default function Header() {
    return (
        <motion.header className={header.nav} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <motion.div initial={{ y: -100, x: "-50%", opacity: 0 }} animate={{ y: 0, x: "-50%", opacity: 1 }}>
                <Link className={header.title} href="/">
                    Niferu <span className={header.dot}>.</span>
                </Link>
                <Link className={header.underline} href="/">
                    Home
                </Link>
                <Link className={header.underline} href="/">
                    About
                </Link>
                <Link className={header.underline} href="/">
                    Education
                </Link>
                <Link className={header.underline} href="/">
                    Skills
                </Link>
                <Link className={header.underline} href="/">
                    Contact
                </Link>
                <Link className={header.underline} href="/">
                    Projects
                </Link>
            </motion.div>
        </motion.header>
    )
}
