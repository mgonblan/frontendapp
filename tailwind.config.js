module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9fbff",
          100: "#f4f4f4",
          800: "#3a3939",
          900: "#0d1624",
          "50_01": "#f8f9fa",
          "900_01": "#161616",
          "800_01": "#393939",
        },
        blue_gray: {
          50: "#eaecf0",
          100: "#d6dae2",
          200: "#bac1ce",
          300: "#9ea8ba",
          600: "#5f6c86",
          700: "#424c5d",
          900: "#262b35",
        },
        red: { 700: "#d03329" },
        blue: {
          800: "#0052dc",
          "900_28": "#003ea828",
          A700: "#0061ff",
          A700_01: "#0065ff",
          A700_02: "#0a58ff",
          A700_03: "#0f62fe",
        },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        inter: "Inter",
        ibmplexsans: "IBM Plex Sans",
        opensans: "Open Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
