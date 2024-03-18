import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#377DFF",
        green: "#38CB89",
        orange: "#FFAB00",
        red: "#FF5630",
        white: "#FFF8E7",
        pureWhite: "#FFFFFF",
        primaryBlack: "#000000",
        black07: "#141718",
        black06: "#232627",
        black05: "#343839",
        black04: "#6C7275",
        grey03: "#E8ECEF",
        grey02: "#F3F5F7",
        grey01: "#FEFEFE",
        modalBg: "#F1E2CC",
        modalText: "#1D1E1F",
        // Status colors
        success: "#48C546",
        danger: "#EB5454",
      },
      fontSize: {
        label: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "22px",
        xxl: "24px",
        h6: "26px",
        h5: "32px",
        h4: "36px",
        h3: "42px",
        h2: "48px",
        h1: "56px",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },

      spacing: {
        0: "0px",
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        30: "30px",
        32: "32px",
        36: "36px",
        38: "38px",
        40: "40px",
        48: "48px",
        50: "50px",
        56: "56px",
        64: "64px",
        72: "72px",
        80: "80px",
        88: "88px",
        96: "96px",
        104: "104px",
        110: "110px",
        112: "112px",
        120: "120px",
        128: "128px",
        160: "160px",
        168: "168px",
        240: "240px",
        255: "255px",
        "fluid-x": "clamp(16px, 0.062 * 100vw, 120px)",
        "fluid-top": "clamp(18px, 0.019 * 100vw, 50px)",
        "fluid-bottom": "clamp(1.625rem, 0.304rem + 6.607vw, 6.25rem)",
        "card-w": "clamp(9.5rem, 7.079rem + 10.329vw, 16.375rem)",
        "card-h": "clamp(12.625rem, 9.368rem + 13.897vw, 21.875rem)",
      },
      animation: {
        slideInFromRight:
          "slideInFromRight 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },

  plugins: [],
};
export default config;
