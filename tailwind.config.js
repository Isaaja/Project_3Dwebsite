/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#008DDA",
          secondary: "#41C9E2",
          accent: "#ACE2E1",
          neutral: "#000000",
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
        "hero-images": "url('./public/assets/images/hero-bg.png')",
        "card01": "url('./public/assets/products/card-1.jpeg')",
      },
    },
  },
  plugins: [],
};
