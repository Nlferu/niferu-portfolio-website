"use client"

import React, { useCallback } from "react"
import { Particles } from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useTheme } from "@/context/theme-context"
import type { Engine } from "tsparticles-engine"

export default function Particle() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    const particlesloaded = useCallback(async () => {}, [])
    const { theme } = useTheme()

    return (
        <Particles
            className="absolute z-[-999] top-[3.5rem] w-full h-full"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesloaded}
            options={{
                fullScreen: { enable: false },
                background: {
                    color: {
                        value: "",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 90,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: theme === "light" ? "rgba(28, 0, 62, 1)" : "#e68e2e",
                    },
                    links: {
                        color: theme === "light" ? "rgba(35, 0,140, 0.8)" : "#f5d393",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}
