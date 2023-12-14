"use client"

import { useState } from "react"
import { BsRocket } from "react-icons/bs"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function ScottyTheRocket() {
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
    const [isHovered, setIsHovered] = useState(false)

    return (
        <section className="flex flex-col items-center">
            <a
                href="#home"
                onClick={() => {
                    setActiveSection("Home")
                    setTimeOfLastClick(Date.now())
                }}
            >
                <BsRocket
                    className="mt-[-1rem] p-1 h-[2.5rem] w-[2.5rem] text-darky/80 dark:text-beta hover:text-darky dark:hover:text-lighty hover:scale-110 active:scale-[1.4] hover:translate-y-[-0.3rem] transition duration-custom ease-customBezier"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </a>
            {isHovered && <span className="absolute text-black dark:text-lighty text-xs mt-6">Beam me up, Scotty!</span>}
        </section>
    )
}
