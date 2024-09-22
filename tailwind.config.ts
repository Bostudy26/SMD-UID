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
        background: "var(--background)",
        foreground: "var(--foreground)",
        boSky: "#C3EBFA",
        boSkyLight: "#EDF9FD",
        boPurple: "#CFCEFF",
        boPurpleLight: "#F1F0FF",
        boYellow: "#FAE27C",
        boYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
