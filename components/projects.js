"use client"

import React, { useEffect } from "react"
import SectionHeading from "./section-heading"
import Project from "./project"
import projectsStyle from "@/styles/project.module.css"
import { projectsData } from "@/lib/data"
import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function Projects() {
    const { ref, inView } = useInView({
        /** @dev If 50% (it is bigger than about) of content is in view bool will be true */
        threshold: 0.5,
    })
    const { setActiveSection } = useActiveSectionContext()

    useEffect(() => {
        if (inView) {
            setActiveSection("Projects")
        }
    }, [inView, setActiveSection])

    return (
        <section className={projectsStyle.projects} ref={ref} id="projects">
            <SectionHeading>My Projects</SectionHeading>
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
