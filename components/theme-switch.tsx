"use client"

import React from "react"
import { BsMoonFill, BsSunFill } from "react-icons/bs"
import { useTheme } from "@/context/theme-context"

export type Theme = "light" | "dark"

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            className="flex fixed items-center bg-transparent bg-opacity-0 dark:bg-opacity-0 border-solid border-[0.3px] border-darky/80 hover:border-darky
            dark:border-lighty shadow-night dark:shadow-sun hover:shadow-nightA dark:hover:shadow-sunA rounded-full justify-center backdrop-blur-[0.2rem] bottom-12
            right-12 text-darky/80 hover:text-darky dark:text-lighty/70 dark:hover:text-lighty h-8 w-8 text-xl md:h-10 md:w-10 md:text-2xl hover:scale-[1.15]
            active:scale-105 transition-all duration-custom ease-customBezier"
            onClick={toggleTheme}
        >
            {theme === "light" ? <BsMoonFill /> : <BsSunFill />}
        </button>
    )
}
