"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import custom from "@/styles/underline.module.css"
import clsx from "clsx" // Adding conditional styles
import { motion } from "framer-motion"
import { links } from "@/lib/data"
import { FaBars } from "react-icons/fa"
import { useActiveSectionContext } from "@/context/active-section-context"
import { useTheme } from "@/context/theme-context"

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
    const [navBtn, setNavBtn] = useState(false)
    const { theme } = useTheme()

    /** @dev Always set value to opposite to current one */
    const handleNavBtn = () => setNavBtn(!navBtn)

    /** @dev Update navBtn based on screen width */
    const updateNavBtn = () => {
        if (window.innerWidth > 1024) {
            setNavBtn(false)
        }
    }

    /** @dev Add event listener for screen width changes */
    useEffect(() => {
        updateNavBtn()
        window.addEventListener("resize", updateNavBtn)
        return () => {
            window.removeEventListener("resize", updateNavBtn)
        }
    }, [])

    return (
        <header className="relative z-[999]">
            {/* We need to separate blur effects from each other to get both working */}
            <div className="fixed flex top-0 left-0 h-[4.5rem] w-full backdrop-blur-[2px]" />
            <nav
                className={clsx("fixed flex top-0 left-0 h-[4.5rem] w-full items-center bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 duration-500", {
                    "lg:pt-4 lg:!bg-transparent": activeSection === "Home",
                })}
            >
                <motion.ul className="ml-[5rem] lg:ml-[10rem]" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                    <Link
                        className="flex text-lotr dark:text-white text-5xl"
                        href="#home"
                        onClick={() => {
                            setActiveSection("Home")
                            setTimeOfLastClick(Date.now())
                        }}
                    >
                        Niferu <span className="text-stone-500 dark:text-alfa">.</span>
                    </Link>
                </motion.ul>

                {/* Standard Menu */}
                <motion.ul className={"hidden lg:flex ml-auto flex-nowrap gap-3 mr-[5rem]"} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                    {links.map((link) => (
                        <li key={link.hash} className="flex justify-center py-3 lg:pt-0">
                            <Link
                                className={clsx(theme === "dark" ? custom.underline : custom.undercity, {
                                    "text-nite dark:text-alfa": activeSection === link.name,
                                })}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name)
                                    setTimeOfLastClick(Date.now())
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className={clsx("flex absolute w-full h-[13%] rounded bg-stone-400 dark:bg-dungeon bottom-[-0.2rem]", {
                                            "lg:!bg-transparent": activeSection === "Home",
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

                <motion.div
                    className={"flex lg:hidden ml-auto mr-[3rem] text-2xl text-lotr hover:cursor-pointer"}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <FaBars onClick={handleNavBtn} />
                </motion.div>

                {/* Mobile Menu */}
                <motion.ul
                    className={
                        navBtn ? "lg:hidden absolute w-full top-[4.6rem] flex-col bg-white bg-opacity-70 backdrop-blur-[5px] rounded-b-lg z-[-10]" : "hidden"
                    }
                    initial={{ y: -500 }}
                    animate={navBtn ? { y: 0 } : { y: -500 }}
                    transition={{ duration: 0.5 }}
                >
                    {links.map((link) => (
                        <li key={link.hash} className={"flex justify-center py-3 lg:pt-0"}>
                            <Link
                                className={clsx(theme === "dark" ? custom.underline : custom.undercity, {
                                    "text-nite dark:text-alfa": activeSection === link.name,
                                })}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name)
                                    setTimeOfLastClick(Date.now())
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && navBtn && (
                                    <motion.span
                                        className={clsx("flex absolute w-full h-[13%] rounded bg-stone-400 dark:bg-dungeon bottom-[-0.2rem]", {
                                            "lg:!bg-transparent": activeSection === "Home",
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
