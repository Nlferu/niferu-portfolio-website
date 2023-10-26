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
                sun: "0px 0px 5px rgba(253, 186, 116, 0.8)",
                sunA: "0px 0px 9px rgba(253, 186, 116, 1)",
                night: "0px 0px 9px rgba(0, 0, 0, 0.8)",
                nightA: "0px 0px 15px rgba(0, 0, 0, 1)",
            },
            colors: {
                alfa: "rgba(255, 141, 0, 0.75)",
                god: "rgba(255, 141, 0, 1)",

                las: "rgba(14, 14, 14, 0.8)",
                dev: "rgba(14, 14, 14, 1)",

                ra: "rgba(253, 186, 116, 0.7)",
                anu: "rgba(253, 186, 116, 1)",

                lotr: "rgba(14, 36, 49, 1)",

                nite: "rgba(67, 52, 28, 0.8)",
                lord: "rgba(67, 52, 28, 1)",

                divider: "rgba(67, 52, 28, 0.6)",

                beta: "#805d39",
                devil: "rgba(12, 9, 9, 1)",
                crypt: "rgba(37, 30, 35, 0.4)",
                brownie: "rgba(37, 30, 35, 0.9)",
                dungeon: "rgb(37, 26, 26)",
            },
        },
    },
    plugins: [],
    darkMode: "class",
}

export default config
