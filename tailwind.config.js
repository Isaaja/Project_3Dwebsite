/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#008DDA",
          "secondary": "#41C9E2",
          "accent": "#ACE2E1",
          "neutral": "#000000",
          "base-100": "#F7EEDD",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'hero-images' : "url('assets/images/background.jpg')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

