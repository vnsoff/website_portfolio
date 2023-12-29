// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
            '0%%': {
              transform: 'translateX(-20%)',
            },
            '50%': {
              transform: 'translateX(20%)',
            },
            '100%': {
              transform: 'translateX(0%)',
            },
        },
        reverseShimmer: {
            '0%': {
              transform: 'translateX(20%)',
            },
            '50%': {
              transform: 'translateX(-20%)',
            },
            '100%': {
              transform: 'translateX(0%)',
            },
        },
        'bounce-custom': {
          '0%, 100%': {
            transform: 'translateY(5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'bounce-custom': 'bounce-custom 5s infinite',
        shimmer: 'shimmer 2s ease-in-out infinite',
        reverseShimmer: 'shimmer 2s ease-in-out infinite',
      },
      backgroundColor: {
        'custom-bg-color': '#201e2b',
        'custom-alt-color': '#292438',
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
