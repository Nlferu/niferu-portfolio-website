"use client"

import React, { useEffect, useState } from "react"
import themeStyle from "@/styles/theme-switch.module.css"
import { BsMoon, BsSun } from "react-icons/bs"

export type Theme = "light" | "dark"

export default function ThemeSwitch() {
    /** @dev Default theme 'dark' */
    const [theme, setTheme] = useState<Theme>("dark")

    const toggleTheme = () => {
        /** @dev If current theme is 'light' -> change it into 'dark' */
        if (theme === "dark") {
            setTheme("light")
            window.localStorage.setItem("theme", "light")
            /** @dev Adding theme to DOM for Tailwind */
            document.documentElement.classList.add("light")
        } else {
            setTheme("dark")
            window.localStorage.setItem("theme", "dark")
            /** @dev Removing theme from DOM for Tailwind */
            document.documentElement.classList.remove("light")
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null

        if (localTheme) {
            setTheme(localTheme)

            if (localTheme === "light") {
                document.documentElement.classList.add("light")
            }

            /** @dev Reads user browser theme and matches it */
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            setTheme("light")
            document.documentElement.classList.add("light")
        }
    }, [])

    return (
        <button className={themeStyle.position} onClick={toggleTheme}>
            {theme === "dark" ? <BsSun /> : <BsMoon />}
        </button>
    )
}
