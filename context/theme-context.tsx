import React, { useState } from "react"

export type Theme = "light" | "dark"

export const toggleTheme = () => {
    const [theme, setTheme] = useState<Theme>("dark")

    /** @dev If current theme is 'light' -> change it into 'dark' */
    if (theme === "dark") {
        setTheme("light")
        window.localStorage.setItem("theme", "light")
    } else {
        setTheme("dark")
        window.localStorage.setItem("theme", "dark")
    }
}
