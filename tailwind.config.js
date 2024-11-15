/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/home-bg.png')",
        'about-bg': "url('/about.png')",
        'footer-bg': "url('/footer-bg.png')",
        'collection-bg': "url('/collection-bg.png')",
        'category-bg': "url('/category-bg.png')",
        'navbar-bg': "url('/navbar-bg.png')",
      },

    },
  },
  plugins: [],
}

