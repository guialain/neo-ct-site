// ESM
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Extra small devices (très petits mobiles)
        // sm: '640px' (défaut Tailwind)
        // md: '768px' (défaut Tailwind)
        // lg: '1024px' (défaut Tailwind)
        // xl: '1280px' (défaut Tailwind)
        // 2xl: '1536px' (défaut Tailwind)
      },
    },
  },
  plugins: [],
};
