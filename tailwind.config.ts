import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // A fonte 'sans' será controlada pelo seu globals.css
        // Criamos uma nova classe 'font-cinzel' para os títulos
        cinzel: ['var(--font-cinzel)'],
      },
    },
  },
  plugins: [],
};
export default config;