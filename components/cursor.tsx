"use client"

import React, { useState, useEffect } from "react"
import cursor from "@/styles/cursor.module.css"

export default function Cursor() {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        document.addEventListener("mousemove", onMouseMove)

        return () => {
            document.removeEventListener("mousemove", onMouseMove)
        }
    }, [])

    return (
        <div className={cursor.cursorContainer} style={{ left: `${position.x}px`, top: `${position.y}px` }}>
            <div className={cursor.circle}></div>
        </div>
    )
}
