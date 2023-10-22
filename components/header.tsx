"use client"

import Link from "next/link"
import header from "@/styles/header.module.css"
import clsx from "clsx" // Adding conditional styles
import { motion } from "framer-motion"
import { links } from "@/lib/data"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <header className="relative z-[999]">
            <nav
                className={clsx("fixed flex justify-end items-center  top-0 left-0 h-[4rem] w-full bg-black bg-opacity-60 backdrop-blur-[2px] duration-500", {
                    "pt-4 !bg-transparent": activeSection === "Home",
                })}
            >
                <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                    <ul className="flex items-center">
                        <Link
                            className="fixed px-[5rem] left-0 text-white text-5xl"
                            href="#home"
                            onClick={() => {
                                setActiveSection("Home")
                                setTimeOfLastClick(Date.now())
                            }}
                        >
                            Niferu <span className="relative left-[-1rem] text-orange-500">.</span>
                        </Link>
                        {links.map((link) => (
                            <li key={link.hash} className="flex relative right-12">
                                <Link
                                    className={clsx(header.underline, { "text-yellow-700": activeSection === link.name })}
                                    href={link.hash}
                                    onClick={() => {
                                        setActiveSection(link.name)
                                        setTimeOfLastClick(Date.now())
                                    }}
                                >
                                    {link.name}

                                    {link.name === activeSection && (
                                        <motion.span
                                            className={clsx("flex absolute w-full h-[20%] rounded bg-stone-950 bottom-[-0.2rem]", {
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
                    </ul>
                </motion.div>
            </nav>
        </header>
    )
}
