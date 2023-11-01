import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            black: "#000000",
            primary: "#ec4899",
            error: "#C41C1C",
            success: "#1F7A1F",
            gray: "#8492a6",
            "gray-dark": "#273444",
            "gray-light": "#d3dce6",
        },
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                press: "press 0.2s 1 linear",
            },
            keyframes: {
                press: {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(0.92)" },
                    to: { transform: "scale(1)" },
                },
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: { fontSize: theme("fontSize.2xl") },
                h2: { fontSize: theme("fontSize.xl") },
                h3: { fontSize: theme("fontSize.lg") },
            });
        }),
    ],
};
export default config;
