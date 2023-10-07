"use client"

import React from "react"
import expStyle from "@/styles/experience.module.css"
import SectionHeading from "./section-heading"
import "react-vertical-timeline-component/style.min.css"
import { experienceData } from "@/lib/data"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"

export default function Experience() {
    return (
        <section className={expStyle.section} id="experience">
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor="">
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
