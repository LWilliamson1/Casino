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
        parchment: "#f5e6c8",
        "parchment-dark": "#e8d5a3",
        "dungeon-black": "#0d0a0e",
        "dungeon-dark": "#1a1020",
        "dungeon-mid": "#2d1f3d",
        "dungeon-purple": "#4a2d6e",
        "arcane-purple": "#7b2d8b",
        "arcane-violet": "#9b4dca",
        "dragon-red": "#8b1a1a",
        "dragon-crimson": "#c0392b",
        "gold-rune": "#d4af37",
        "gold-bright": "#f0c040",
        "ember-orange": "#e07020",
        "tavern-brown": "#5c3a1e",
        "tavern-wood": "#8b5e3c",
        "tiefling-red": "#cc2222",
        "tiefling-horn": "#3d2b1f",
        "magic-glow": "#a855f7",
      },
      fontFamily: {
        "cinzel": ["'Cinzel'", "serif"],
        "cinzel-decorative": ["'Cinzel Decorative'", "serif"],
        "im-fell": ["'IM Fell English'", "serif"],
      },
      backgroundImage: {
        "stone-pattern": "url('/textures/stone.svg')",
        "parchment-pattern": "url('/textures/parchment.svg')",
      },
      animation: {
        "flicker": "flicker 3s infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
          "75%": { opacity: "0.95" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 10px #d4af37, 0 0 20px #d4af37" },
          "50%": { boxShadow: "0 0 20px #d4af37, 0 0 40px #d4af37, 0 0 60px #d4af37" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
