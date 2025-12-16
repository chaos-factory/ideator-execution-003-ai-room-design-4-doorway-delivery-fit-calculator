import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0E7490", // deep teal
          hover: "#0C647A",
        },
        status: {
          pass: "#1A9E55",
          warn: "#F4B400",
          fail: "#DE3B3B",
        },
      },
    },
  },
  plugins: [],
};

export default config;
