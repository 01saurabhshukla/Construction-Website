/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#2E3A47",
        whitee: "white",
        primary: "#F4A100",
        secondary: "#FFFFFF",
        gray: "#4B5563",
        // lightGray: "#F8F9FA",
        lightGray: "white"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 20px 40px -15px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
