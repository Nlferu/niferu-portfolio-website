"use client"

import React from "react"
import SectionHeading from "./section-heading"
import "react-vertical-timeline-component/style.min.css"
import { experienceData } from "@/lib/data"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { useSectionInView } from "@/lib/hooks"

import expStyle from "@/styles/experience.module.css"

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.7)
    const options = { triggerOnce: true }

    return (
        <section className={expStyle.section} ref={ref} id="experience">
            <SectionHeading>My Experience</SectionHeading>
            {/* We are setting lineColor in globals.css to avoid errors in console */}
            <VerticalTimeline lineColor="" animate={true}>
                {experienceData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "rgba(37, 32, 35, 0.4)",
                                boxShadow: "none",
                                border: "1px solid #805d39",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                                color: "white",
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #805d39",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: "rgba(37, 26, 26, 1)",
                                fontSize: "1.5rem",
                                color: "black",
                                boxShadow: "0px 0px 10px #805d39",
                                //boxShadow: "0 0 0 4px #805d39",
                            }}
                            intersectionObserverProps={options}
                        >
                            <h3 className={expStyle.title}>{item.title}</h3>
                            <p className={expStyle.location}>{item.location}</p>
                            <p className={expStyle.desc}>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}
