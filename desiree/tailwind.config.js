module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeSlideEnhanced: "fadeSlideEnhanced 9s infinite",
      },
      keyframes: {
        fadeSlideEnhanced: {
          "0%, 100%": { opacity: "0", transform: "translateY(100%) scale(0.95) skewY(4deg)", filter: "blur(4px)" },
          "8%": { opacity: "1", transform: "translateY(0) scale(1.05) skewY(0deg)", filter: "blur(0)" },
          "30%": { opacity: "1", transform: "translateY(0) scale(1.05) skewY(0deg)", filter: "blur(0)" },
          "38%": { opacity: "0", transform: "translateY(-100%) scale(0.95) skewY(-4deg)", filter: "blur(4px)" },
          "90%": { opacity: "0", transform: "translateY(-100%) scale(0.95) skewY(-4deg)", filter: "blur(4px)" },
        },
      },
    },
  },
  plugins: [],
}