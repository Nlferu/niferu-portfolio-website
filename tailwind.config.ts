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
                sun: "0px 0px 5px rgba(253, 186, 116, 0.8)",
                sunA: "0px 0px 9px rgba(253, 186, 116, 1)",
                night: "0px 0px 9px rgba(0, 0, 0, 0.8)",
                nightA: "0px 0px 15px rgba(0, 0, 0, 1)",
                btnShadow: "0px 0px 10px 0px #261b1c",
                projectLight: "0 0 15px #746d69",
                projectDark: "0 0 10px #ff8d00",
            },
            colors: {
                main: "#ff8d00",
                darky: "#0e0e0e",
                lighty: "#fdba74",
                lotr: "#0e2431",
                darklord: "#43341c",
                beta: "#805d39",
                devil: "#0c0909",
            },
        },
    },
    plugins: [],
    darkMode: "class",
}

export default config
