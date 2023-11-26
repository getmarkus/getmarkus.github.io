/** @type {import('tailwindcss').Config} */
// https://noumenal.es/notes/tailwind/custom-color-aliases/
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
