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
        'nexus-blue': '#3B82F6',
        'nexus-dark': '#1E3A5F',
        'nexus-navy': '#0F172A',
        'nexus-green': '#16A34A',
        'nexus-red': '#EF4444',
        'nexus-gold': '#F59E0B',
        'nexus-light-bg': '#F8FAFC',
        'nexus-cyan': '#06B6D4',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
export default config;
