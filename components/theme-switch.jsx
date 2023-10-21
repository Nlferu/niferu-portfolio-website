"use client"

import React, { useEffect, useState } from "react"
import themeStyle from "@/styles/theme-switch.module.css"
import { BsMoon, BsSun } from "react-icons/bs"

export default function ThemeSwitch() {
    /** @dev Default theme 'dark' */
    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        /** @dev If current theme is 'light' -> change it into 'dark' */
        if (theme === "dark") {
            setTheme("light")
            window.localStorage.setItem("theme", "light")
        } else {
            setTheme("dark")
            window.localStorage.setItem("theme", "dark")
        }

        document.body.classList.toggle("light")
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme")

        if (localTheme) {
            setTheme(localTheme)

            /** @dev Reads user browser theme and matches it */
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            setTheme("light")
        }
    }, [])

    return (
        <button className={themeStyle.position} onClick={toggleTheme} id="themeSwitcher">
            {theme === "dark" ? <BsSun /> : <BsMoon />}
        </button>
    )
}
