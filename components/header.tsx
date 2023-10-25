"use client"

import Link from "next/link"
import custom from "@/styles/underline.module.css"
import clsx from "clsx" // Adding conditional styles
import { motion } from "framer-motion"
import { links } from "@/lib/data"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <header className="relative z-[999]">
            <nav
                className={clsx("fixed flex top-0 left-0 h-[4.5rem] w-full items-center bg-black bg-opacity-50 backdrop-blur-[2px] duration-500", {
                    "pt-4 !bg-transparent": activeSection === "Home",
                })}
            >
                <motion.ul className="ml-[10rem]" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                    <Link
                        className="flex text-lotr dark:text-white text-5xl"
                        href="#home"
                        onClick={() => {
                            setActiveSection("Home")
                            setTimeOfLastClick(Date.now())
                        }}
                    >
                        Niferu <span className="text-lord dark:text-alfa">.</span>
                    </Link>
                </motion.ul>
                <motion.ul className="ml-auto flex flex-wrap sm:flex-nowrap gap-3 mr-[5rem]" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                    {links.map((link) => (
                        <li key={link.hash} className="flex">
                            <Link
                                className={clsx(custom.underline, { "text-try dark:text-alfa": activeSection === link.name })}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name)
                                    setTimeOfLastClick(Date.now())
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className={clsx("flex absolute w-full h-[13%] rounded bg-dungeon bottom-[-0.2rem]", {
                                            "!bg-transparent": activeSection === "Home",
                                        })}
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
                </motion.ul>
            </nav>
        </header>
    )
}
