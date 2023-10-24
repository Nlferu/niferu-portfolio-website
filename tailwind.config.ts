import type { Config } from "tailwindcss"

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            transitionTimingFunction: {
                customBezier: "cubic-bezier(0.4,2.1,0.7,1)",
                customImgBezier: "cubic-bezier(0, 0, 1, 1)",
            },
            transitionDuration: {
                custom: "0.3s",
            },
            boxShadow: {
                "3xl": "0 0 20px rgba(255, 255, 255, 0.2)",
                sun: "0px 0px 5px rgba(159, 137, 94, 0.75)",
                sunA: "0px 0px 9px rgba(159, 137, 94, 0.75)",
                night: "0px 0px 5px rgba(13, 13, 53, 0.8)",
                nightA: "0px 0px 9px rgba(13, 13, 53, 0.8)",
            },
            colors: {
                alfa: "rgba(255, 141, 0, 0.8)",
                beta: "rgba(159, 137, 94, 0.8)",
                sea: "#22676b",
                seaD: "#92c2bc",
                god: "rgba(159, 137, 94, 0.7)",
                devil: "rgba(12, 9, 9, 1)",
                crypt: "rgba(37, 30, 35, 0.4)",
                dungeon: "rgb(37, 26, 26)",
                wise: "#805d39",
                sun: "rgba(159, 137, 94, 0.75)",
            },
        },
    },
    plugins: [],
    darkMode: "class",
}

export default config
