module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        georama: ["Georama", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
