module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/assets/home-img.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
