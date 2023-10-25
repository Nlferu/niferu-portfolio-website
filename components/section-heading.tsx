import React from "react"

type SectionHeadingProps = {
    children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
    return <h2 className="text-center text-lotr dark:text-gray-300 text-3xl font-medium capitalize mb-8 mt-20 sm:mt-32">{children}</h2>
}
