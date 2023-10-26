"use client"

import { BsRocket } from "react-icons/bs"
import { useActiveSectionContext } from "@/context/active-section-context"
import { useState } from "react"

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
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <BsRocket className="h-[2rem] w-[2rem] text-las dark:text-beta hover:text-dev dark:hover:text-anu hover:scale-110 active:scale-[1.4] hover:translate-y-[-0.3rem] transition" />
            </a>
            {isHovered && <span className="absolute text-black dark:text-anu text-xs mt-10">Beam me up, Scotty!</span>}
        </section>
    )
}
