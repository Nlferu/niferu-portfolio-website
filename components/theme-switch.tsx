import React from "react"
import themeStyle from "@/styles/theme-switch.module.css"
import { BsSun } from "react-icons/bs"

export default function ThemeSwitch() {
    return (
        <button className={themeStyle.position}>
            <BsSun className={themeStyle.icon} />
        </button>
    )
}
