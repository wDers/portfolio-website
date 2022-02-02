module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      bg: "#f0e7db",
      bghover: "#2c7a7b",
      primary: "#319795",
      secondary: "#3d7aed",
      text: "#1a202c",
      bgdark: "#100e19",
      bgdarkhover: "#08c3a3",
      primarydark: "#09dbb8",
      secondarydark: "#f472b6",
      textdark: "#ffffeb",
      gray: "#525252",
      black: "#000",
      white: "#fff",
      whitesmoke: "#ffffff29",
    },
    fontFamily: {
      system: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
      heading: ["M PLUS Rounded 1c", "sans-serif"],
    },
  },

  plugins: [],
};
