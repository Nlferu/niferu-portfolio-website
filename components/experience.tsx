"use client"

import React from "react"
import SectionHeading from "./section-heading"
import "react-vertical-timeline-component/style.min.css"
import { experienceData } from "@/lib/data"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { useSectionInView } from "@/lib/hooks"
import { useTheme } from "@/context/theme-context"

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.7)
    const { theme } = useTheme()
    const options = { triggerOnce: true }

    return (
        <section ref={ref} id="experience">
            <SectionHeading>My Experience</SectionHeading>
            {/* We are setting lineColor in globals.css to avoid errors in console */}
            <VerticalTimeline lineColor="" animate={true}>
                {experienceData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "rgba(37, 30, 35, 0.4)",
                                boxShadow: "none",
                                border: "1px solid #805d39",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                                color: theme === "light" ? "black" : "white",
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #805d39",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: "rgb(37, 26, 26)",
                                fontSize: "1.5rem",
                                color: "rgba(159, 137, 94, 0.7)",
                                boxShadow: "0px 0px 10px #805d39",
                                //boxShadow: "0 0 0 4px #805d39",
                            }}
                            intersectionObserverProps={options}
                        >
                            <h3 className="-mt-2 !font-semibold capitalize text-lord dark:text-alfa">{item.title}</h3>
                            <p className="!font-normal text-beta !mt-3">{item.location}</p>
                            <p className="!font-light !mt-1">{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}
