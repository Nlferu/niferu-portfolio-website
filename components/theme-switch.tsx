"use client"

import React from "react"
import { BsMoon, BsSun } from "react-icons/bs"
import { useTheme } from "@/context/theme-context"

export type Theme = "light" | "dark"

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            className="flex fixed items-center border-solid border-[0.2px] border-slate-950 dark:border-alfa shadow-night dark:shadow-sun hover:shadow-nightA dark:hover:shadow-sunA rounded-full justify-center backdrop-blur-[0.5rem] bottom-12 right-12 text-slate-950 dark:text-alfa dark:hover:text-god h-10 w-10 text-2xl hover:scale-[1.15] active:scale-105 transition-all"
            onClick={toggleTheme}
        >
            {theme === "light" ? <BsMoon /> : <BsSun />}
        </button>
    )
}
