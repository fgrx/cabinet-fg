/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        primary: "#03828C",
        secondary: "#CC6944",
        tertiary: "#f6dbdb",
        backgroundDarker: "#f8f4e4",
        background: "hsl(0, 0%, 88%)",
        disabled: "hsl(0, 0%, 68%)",
        dark: "#414141",
        light: "#fff",
        menuLight: "#b0cf76",
        menu: "##016e76",
      },
      height: {
        banner: "40rem",
      },
    },
  },
  safelist: [
    "bg-primary",
    "bg-primaryMedium",
    "bg-primaryLight",
    "bg-secondary",
    "bg-secondaryLight",
    "bg-background",
    "bg-backgroundDarker",
    "bg-dark",
    "bg-menu",
    "bg-disabled",
  ],
  plugins: [require("@tailwindcss/forms")],
};
