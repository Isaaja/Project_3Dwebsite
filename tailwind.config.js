/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#181C14",
          secondary: "#3C3D37",
          accent: "#697565",
          neutral: "#ECDFCC",
          "base-100": "#F7EEDD",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Tambahkan font di sini
      },
      backgroundImage: {
        "hero-images": "url('/assets/images/hero-bg.png')",
        "card01": "url('/assets/products/card-1.jpeg')",
      },
    },
  },
  plugins: [require('daisyui')],
};
