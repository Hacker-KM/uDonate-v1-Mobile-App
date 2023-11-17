/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        aliceblue: "#e2e8f0",
        gray: {
          "100": "#fafafa",
          "200": "#1e293b",
          "300": "#0f172a",
          "400": "rgba(15, 23, 42, 0.4)",
        },
        blueviolet: "#4f46e5",
        lightslategray: "#94a3b8",
      },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
      borderRadius: {
        xxs: "10px",
        small: "99px",
        base: "100px",
        large: "999px",
      },
    },
    fontSize: {
      "3xs": "12px",
      "2xs": "13px",
      xs: "16px",
      sm: "18px",
      base: "20px",
      lg: "24px",
      xl: "32px",
    },
  },
  corePlugins: { preflight: false },
};
