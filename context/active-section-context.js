"use client"

import React, { useState, createContext, useContext } from "react"

const ActiveSectionContext = createContext(null)

/** @dev Component below will keep track of the state */
export default function ActiveSectionContextProvider({ children }) {
    const [activeSection, setActiveSection] = useState("Home")
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    )
}

/** @dev Custom Hook, which will allow us to access activeSection and setActiveSection values */
export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)

    if (context === null) {
        throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider")
    }

    return context
}
