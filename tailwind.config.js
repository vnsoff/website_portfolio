// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg-color': '#201e2b',
        'custom-alt-color': '#373349',
        purple: {
          500: '#8a63e5',
        },
        indigo: {
          500: '#6366f1',
        },
      },
      textColor: {
        'custom-color': '#242235',
      },
    },
  },
  plugins: [
    require('@material-tailwind/react'),
  ],
};
