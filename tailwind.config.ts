import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{json}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '2xl': '1rem'
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.08)',
      },
      transitionTimingFunction: {
        'softer': 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    },
  },
  plugins: [],
} satisfies Config;