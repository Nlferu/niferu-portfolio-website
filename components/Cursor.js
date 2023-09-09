"use client"

import React, { useState, useEffect } from "react"
import glow from "../styles/glow.module.css"

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        document.addEventListener("mousemove", onMouseMove)

        return () => {
            document.removeEventListener("mousemove", onMouseMove)
        }
    }, [])

    return (
        <div className={glow.cursorContainer} style={{ left: `${position.x}px`, top: `${position.y}px` }}>
            <div className={glow.circle}></div>
        </div>
    )
}
