/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#4a4a42",
        brand: "#006273",
        active: "#222D32",
        black: {
          800: "#1F1D1D",
        },
        gray: {
          custom: "#dbdbd9",
        },
        red: {
          custom: "#FF0000",
        },
        blue: {
          active: "#22aeaa",
        },
        yellow: {
          custom: "#FFB61E",
        },
      },
      boxShadow: {
        title: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
