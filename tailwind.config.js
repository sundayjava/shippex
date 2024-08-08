/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "shipping-primary": "#60A5FA", 
        "shipping-secondary": "#2563EB",
        "shipping-accent": "#EFF6FF",
      },
    },
    fontFamily: {
      Roboto: ["Inter, sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "3rem",
        "2xl": "3rem",
      },
    }
  },
  plugins: [],
};
