"use client"

import React, { useEffect, useState, createContext, useContext } from "react"

type Theme = "light" | "dark"

type ThemeContextProviderProps = {
    children: React.ReactNode
}

type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("dark")

    const toggleTheme = () => {
        /** @dev If current theme is 'light' -> change it into 'dark' */
        if (theme === "light") {
            setTheme("dark")
            window.localStorage.setItem("theme", "dark")
            /** @dev Adding theme to DOM for Tailwind */
            document.documentElement.classList.add("dark")
        } else {
            setTheme("light")
            window.localStorage.setItem("theme", "light")
            /** @dev Removing theme from DOM for Tailwind */
            document.documentElement.classList.remove("dark")
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null

        if (localTheme) {
            setTheme(localTheme)

            if (localTheme === "dark") {
                document.documentElement.classList.add("dark")
            }

            /** @dev Reads user browser theme and matches it */
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
            document.documentElement.classList.add("dark")
        } else {
            setTheme("dark")
            document.documentElement.classList.add("dark")
        }
    }, [])

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider")
    }

    return context
}
