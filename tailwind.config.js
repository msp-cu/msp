/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00f0ff",
        neonPink: "#ff2fd2",
        darkBg: "#0b0b0f",
        neonGreen: "#39ff14",
        neonYellow: "#facc15",
        neonRed: "#ff073a",
      },
      fontFamily: {
        pixel: ["'Press Start 2P'", "cursive"],
      },
    },
  },
  plugins: [],
}
