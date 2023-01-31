/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(-10px)" },
          // "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "translateX(10px)" }
        }
      },
      animation: {
        wiggle: "wiggle 100ms ease-in-out"
      }
    }
  },
  plugins: [
  ],
}
