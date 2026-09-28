import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#FAFAFA",
          cream: "#F0F2F5",
          carbon: "#333333", // Gris oscuro para textos en lugar de negro
          dark: "#1A1A1A",
          accent: "#00D1B2", // Acento vibrante estilo deportivo (Menta/Turquesa)
          accentHover: "#00B89C",
          danger: "#FF4A5A" // Para descuentos o alertas
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};
export default config;
