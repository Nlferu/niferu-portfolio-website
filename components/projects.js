import React from "react"
import SectionHeading from "./section-heading"
import Project from "./project"
import project from "@/styles/project.module.css"
import { projectsData } from "@/lib/data"

export default function Projects() {
    return (
        <section className={project.projects} id="projects">
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
