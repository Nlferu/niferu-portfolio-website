"use client"

import Link from "next/link"
import header from "@/styles/header.module.css"
import { motion } from "framer-motion"
import { links } from "@/lib/data"

export default function Header() {
    return (
        <header className={header.header}>
            <motion.div className={header.nav} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                <Link className={header.title} href="/">
                    Niferu <span className={header.dot}>.</span>
                </Link>
                {links.map((link) => (
                    <motion.li key={link.hash} className={header.li}>
                        <Link className={header.underline} href={link.hash}>
                            {link.name}{" "}
                        </Link>
                    </motion.li>
                ))}
            </motion.div>
        </header>
    )
}
