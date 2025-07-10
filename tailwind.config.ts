// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,ts,tsx}", "./src/*.{css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
