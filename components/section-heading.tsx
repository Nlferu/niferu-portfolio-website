import React from "react"

type SectionHeadingProps = {
    children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
    return <h2 className="text-gray-300 text-3xl font-medium capitalize mt-24 mb-8 text-center">{children}</h2>
}
