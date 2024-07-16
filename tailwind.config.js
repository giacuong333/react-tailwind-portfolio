/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#766dff", // Replace with your actual color code
      },
    },
  },
  variants: {
    extend: {
      textColor: ["group-hover"],
    },
  },
  plugins: [],
};
