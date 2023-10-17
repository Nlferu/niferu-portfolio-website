import React from "react"
import heading from "@/styles/section-heading.module.css"

type SectionHeadingProps = {
    children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
    return <h2 className={heading.format}>{children}</h2>
}
