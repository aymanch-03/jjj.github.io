/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a",
        primary: "#EB0029",
      },
      backgroundImage: {
        one: "url('/assets/mainSlider/bgOne.jpeg')",
        two: "url('/assets/mainSlider/bgTwo.jpeg')",
        three: "url('/assets/mainSlider/bgThree.jpeg')",
      },
    },
  },
  plugins: [],
};
