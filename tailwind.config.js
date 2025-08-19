/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary color shorthand
        primary: '#6e4424',
        // Primary color palette
        'primary': {
          DEFAULT: '#6e4424',
          50: '#f4bb6f',
          100: '#e6aa5b',
          200: '#d29952',
          300: '#be8849',
          400: '#aa7740',
          500: '#966636',
          600: '#82552d',
          700: '#6e4424', // Main brand color
          800: '#5a381f',
          900: '#4a2f1a',
        },
        // Neutral colors (gray scale)
        neutral: {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e6e6e6',
          300: '#cccccc',
          400: '#b3b3b3',
          500: '#999999',
          600: '#808080',
          700: '#666666',
          800: '#4d4d4d',
          900: '#333333',
        },
        // Background colors
        background: {
          DEFAULT: '#ffffff',
          primary: '#e3d6c3',
          secondary: '#e4e4e4',
          tertiary: '#f5f5f5',
          dark: '#1a1a1a',
        },
        // Text colors
        text: {
          DEFAULT: '#000000',
          primary: '#000000',
          secondary: '#333333',
          tertiary: '#666666',
          inverse: '#ffffff',
          muted: '#999999',
        },
        // Accent colors
        accent: {
          warm: '#d4a574',
          cool: '#7c9885',
          highlight: '#c9a876',
        },
        // Add foreground and border for compatibility
        foreground: '#000000',
        border: '#e5e7eb',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'system-ui', 'sans-serif'],
        'nuber-next': ['NuberNext', 'system-ui', 'sans-serif'],
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}