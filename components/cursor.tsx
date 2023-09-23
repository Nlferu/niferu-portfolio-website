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

// --tw-ring-offset-width: 0px;
// --tw-ring-offset-color: #fff;
// --tw-ring-color: rgba(59,130,246,.5);
// --tw-ring-offset-shadow: 0 0 #0000;
// --tw-ring-shadow: 0 0 #0000;
// --tw-shadow: 0 0 #0000;
// --tw-shadow-colored: 0 0 #0000;
