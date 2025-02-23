module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.css", "./src/**/*.jsx"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#333333",
        darkblack: "#232323",
        textColor: "#E0D710",
      },
      screens: {
        // sm: "640px", // Small screens (phones)
        md: "412px", // Medium screens (tablets)
        lg: "1024px", // Large screens (laptops)
        xl: "1280px", // Extra-large screens (desktops)
        "2xl": "1536px", // 2x Extra-large screens
      },
    },
  },
};
