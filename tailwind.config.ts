import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        dashwidth:
          "linear-gradient(90deg, #818A97, #818A97 75%, transparent 20%, transparent 10%)",
      },
      backgroundSize: {
        "1px": "1px",
        "15px": "15px",
        "20px": "20px",
        "25px": "25px",
        "30px": "30px",
        "35px": "35px",
        "40px": "40px",
        "45px": "45px",
        "50px": "50px",
        "55px": "55px",
        "60px": "60px",
        "65px": "65px",
        "70px": "70px",
        "75px": "75px",
        "80px": "80px",
        "85px": "85px",
        "90px": "90px",
      },
      colors: {
        cardGray: "#00000D",
      },
    },
  },
  plugins: [],
};
export default config;
