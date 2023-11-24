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
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_3f": "#0000003f",
          "900_59": "#00000059",
        },
        blue_gray: { 100: "#d9d9d9", "900_23": "#25493623" },
        gray: { 100: "#fdf4f4", 900: "#1e1e1e" },
        green: { "700_c9": "#1a9b55c9", "700_54": "#1a9b5554" },
        teal: { 500: "#1a9b7c", 600: "#13896c", "600_00": "#13896c00" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(123deg ,#13896c00,#13896c)",
        gradient1: "linear-gradient(123deg ,#13896c,#13896c00)",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
