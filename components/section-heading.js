import React from "react"
import heading from "@/styles/heading-sec.module.css"

export default function SectionHeading({ children }) {
    return <h2 className={heading.format}>{children}</h2>
}
