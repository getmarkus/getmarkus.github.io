/** @type {import('tailwindcss').Config} */
// https://noumenal.es/notes/tailwind/custom-color-aliases/
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "sand": {
          50: "#f8f8f8",
          100: "#f3f3f3",
          DEFAULT: "#f3f3f3",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
