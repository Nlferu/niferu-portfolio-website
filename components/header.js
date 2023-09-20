"use client"

import Link from "next/link"
import header from "@/styles/header.module.css"
import { motion } from "framer-motion"
import { links } from "@/lib/data"

export default function Header() {
    return (
        <header className={header.header}>
            <motion.div className={header.motion} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                <nav className={header.nav}>
                    <Link className={header.title} href="/">
                        Niferu <span className={header.dot}>.</span>
                    </Link>
                    {links.map((link) => (
                        <li key={link.hash} className={header.li}>
                            <Link className={header.underline} href={link.hash}>
                                {link.name}{" "}
                            </Link>
                        </li>
                    ))}
                </nav>
            </motion.div>
        </header>
    )
}
