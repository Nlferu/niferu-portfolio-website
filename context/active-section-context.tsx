"use client"

import React, { useState, createContext, useContext } from "react"
import type { SectionName } from "@/lib/types"

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

/** @dev Component below will keep track of the state */
export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home")
    /** @dev We need to keep track of this to disable the observer temporarily when user clicks on a link */
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
