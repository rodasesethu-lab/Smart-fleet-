/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fleet: {
          dark: "#1a1a2e",
          card: "#16213e",
          accent: "#0f3460",
          teal: "#00d4aa",
          tealDark: "#00b894",
          orange: "#e94560",
          text: "#e0e0e0",
          muted: "#8892a4",
          success: "#00d4aa",
          warning: "#ffa502",
          danger: "#e94560",
        }
      }
    },
  },
  plugins: [],
};
