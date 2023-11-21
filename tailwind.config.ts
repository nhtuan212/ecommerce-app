import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            black: "#000000",
            primary: {
                DEFAULT: "#ec4899",
                50: "#fdf2f8",
                100: "#fce7f3",
                200: "#fbcfe8",
                300: "#f9a8d4",
                400: "#f472b6",
                600: "#db2777",
                700: "#be185d",
            },
            gray: {
                DEFAULT: "#8492a6",
                light: "#f9fafb",
                dark: "#273444",
            },
            error: "#C41C1C",
            success: "#1F7A1F",
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
        plugin(function ({ addBase, theme, addVariant }) {
            addBase({
                h1: { fontSize: theme("fontSize.2xl") },
                h2: { fontSize: theme("fontSize.xl") },
                h3: { fontSize: theme("fontSize.lg") },
            });
            // Alias children element
            addVariant("img", "& > img");
        }),
    ],
};
export default config;
