"use client"

import React from "react"
import SectionHeading from "./section-heading"
import Project from "./project"
import { projectsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5)

    return (
        <section ref={ref} id="projects">
            <SectionHeading>My Projects</SectionHeading>
            {/* With div below images will start on right */}
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}
