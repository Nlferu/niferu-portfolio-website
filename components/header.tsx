"use client"

import clsx from "clsx"
import Link from "next/link"
import custom from "@/styles/underline.module.css"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { links } from "@/lib/data"
import { FaBars, FaTimes } from "react-icons/fa"
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
            <div className="fixed flex top-0 left-0 h-[4.5rem] w-full backdrop-blur-[5px]" />
            <nav
                className={clsx(
                    "fixed flex top-0 left-0 h-[4.5rem] w-full items-center bg-white dark:bg-[#07040b] bg-opacity-50 dark:bg-opacity-[85%] duration-500",
                    {
                        "md:pt-4 md:!bg-transparent": activeSection === "Home",
                    }
                )}
            >
                {/* If Logo applied change below to: ml-[7rem] lg:ml-[13rem] */}
                <motion.ul className="ml-[3.5rem] lg:ml-[10rem]" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                    <Link
                        className="flex text-lotr dark:text-white text-5xl"
                        href="#home"
                        onClick={() => {
                            setActiveSection("Home")
                            setTimeOfLastClick(Date.now())
                            setNavBtn(false)
                        }}
                    >
                        {/* Logo Implementation
                        <Image
                            className="absolute w-[5rem] h-[5rem] brightness-50 dark:brightness-100 object-fit rounded-full ml-[-6rem] mt-[-1.1rem]"
                            src="/icon.png"
                            alt="Niferu"
                            height="200"
                            width="200"
                            quality="95"
                            priority={true}
                        /> */}
                        Niferu <span className="text-stone-500 dark:text-main/75">.</span>
                    </Link>
                </motion.ul>
                <motion.ul
                    className={
                        navBtn
                            ? "md:hidden absolute w-full top-[4.6rem] flex-col bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 backdrop-blur-[5px] rounded-b-lg"
                            : "hidden md:flex ml-auto flex-nowrap gap-1 lg:gap-3 mr-[5rem] lg:mr-[2rem]"
                    }
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    {links.map((link) => (
                        <li key={link.hash} className="flex justify-center py-3 md:pt-0">
                            <Link
                                className={clsx(theme === "dark" ? custom.underline : custom.undercity, {
                                    "text-darklord/80 dark:text-main/75 dark:hover:text-main": activeSection === link.name,
                                })}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name)
                                    setTimeOfLastClick(Date.now())
                                    setNavBtn(false)
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className={clsx("flex absolute w-full h-[13%] rounded bg-stone-400 dark:bg-[#ffb997] bottom-[-0.2rem]", {
                                            "md:!bg-transparent": activeSection === "Home",
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
                    className={"flex md:hidden ml-auto mr-[3rem] text-2xl text-lotr dark:text-white hover:cursor-pointer"}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    {navBtn ? <FaTimes onClick={handleNavBtn} /> : <FaBars onClick={handleNavBtn} />}
                </motion.div>
            </nav>
        </header>
    )
}
