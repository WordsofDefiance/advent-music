/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      keyframes: {
        'fall': {
          '0%': {
            transform: 'translateY(0) translateX(0) rotate(0deg)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh) translateX(20px) rotate(360deg)',
            opacity: '0',
          },
        },
        'fall-drift-left': {
          '0%': {
            transform: 'translateY(0) translateX(0) rotate(0deg)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh) translateX(-30px) rotate(360deg)',
            opacity: '0',
          },
        },
        'fall-drift-right': {
          '0%': {
            transform: 'translateY(0) translateX(0) rotate(0deg)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh) translateX(30px) rotate(-360deg)',
            opacity: '0',
          },
        },
        'sparkle': {
          '0%, 100%': {
            opacity: '0.4',
            transform: 'scale(0.8) rotate(0deg)',
          },
          '50%': {
            opacity: '0.9',
            transform: 'scale(1.1) rotate(180deg)',
          },
        },
      },
      animation: {
        'fall': 'fall linear infinite',
        'fall-drift-left': 'fall-drift-left linear infinite',
        'fall-drift-right': 'fall-drift-right linear infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
}

