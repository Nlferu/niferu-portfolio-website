import React from "react"
import heading from "@/styles/section-heading.module.css"

export default function SectionHeading({ children }) {
    return <h2 className={heading.format}>{children}</h2>
}
