import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        xs: "500px",
      },
    },
    extend: {
      screens: {
        "2xl": "1400px",
        xs: "500px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        handwritten: ["var(--font-handwritten)", ...fontFamily.sans],
      },
      colors: {
        border: "hsla(var(--border),1)",
        input: "hsla(var(--input),1)",
        ring: "hsla(var(--ring),1)",
        background: "hsla(var(--background),1)",
        foreground: "hsla(var(--foreground),1)",
        primary: {
          DEFAULT: "hsla(var(--primary),1)",
          foreground: "hsla(var(--primary-foreground),1)",
        },
        secondary: {
          DEFAULT: "hsla(var(--secondary),1)",
          foreground: "hsla(var(--secondary-foreground),1)",
        },
        destructive: {
          DEFAULT: "hsla(var(--destructive),1)",
          foreground: "hsla(var(--destructive-foreground),1)",
        },
        muted: {
          DEFAULT: "hsla(var(--muted),1)",
          foreground: "hsla(var(--muted-foreground),1)",
        },
        accent: {
          DEFAULT: "hsla(var(--accent),0.25)",
          foreground: "hsla(var(--accent-foreground),1)",
        },
        popover: {
          DEFAULT: "hsla(var(--popover),0.35)",
          foreground: "hsla(var(--popover-foreground),1)",
        },
        card: {
          DEFAULT: "hsla(var(--card),1)",
          foreground: "hsla(var(--card-foreground),1)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-shadow": {
          "0%": { boxShadow: "0 0 0rem hsla(var(--primary),1)" },
          "15%": { boxShadow: "0 0 0.5rem hsla(var(--primary),1)" },
          "30%": { boxShadow: "0 0 0rem hsla(var(--primary),1)" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-shadow": "pulse-shadow 5s infinite",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
