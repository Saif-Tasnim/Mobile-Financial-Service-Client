/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      base: ["16px", "20px"],
      lg: ["18px", "22px"],
      "head-4": ["20px", "24px"],
      "head-2": ["22px", "32px"],
      "head-1": ["28px", "44px"],
      "big" : ['40px', '52px']
    },
    extend: {
      colors: {
        primary: "#f89b29",
        success: "#a9ff68",
        cancel: "#ef709b",
        pending: "#696eff",
      },
    },
  },
  plugins: [require("autoprefixer")],
};
