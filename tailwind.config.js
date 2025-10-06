/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/globals.css",
    ],
    theme: {
      extend: {
        fontFamily: {
          'bricolage': ['"Bricolage Grotesque"', 'sans-serif'],
          'noto-sans': ['"Noto Sans"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }