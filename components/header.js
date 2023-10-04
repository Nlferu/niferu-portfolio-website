"use client"

import Link from "next/link"
import header from "@/styles/header.module.css"
import clsx from "clsx" // Adding conditional styles
import { motion } from "framer-motion"
import { links } from "@/lib/data"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function Header() {
    const { activeSection, setActiveSection } = useActiveSectionContext()

    return (
        <header className={header.header}>
            <motion.div className={header.motion} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                <nav className={header.nav}>
                    <Link className={header.title} href="/#home">
                        Niferu <span className={header.dot}>.</span>
                    </Link>
                    {links.map((link) => (
                        <li key={link.hash} className={header.li}>
                            <Link
                                className={clsx(header.underline, { [header.setAct]: activeSection === link.name })}
                                href={link.hash}
                                onClick={() => setActiveSection(link.name)}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className={header.box}
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </li>
                    ))}
                </nav>
            </motion.div>
        </header>
    )
}
