/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing space colors (backward compatibility)
        space: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        // Existing primary colors (backward compatibility)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // New deep navy palette for dark backgrounds
        navy: {
          900: '#050B14',
          800: '#0A1628',
          700: '#0F2140',
        },
        // Accent color - teal/cyan for highlights and CTAs
        accent: {
          DEFAULT: '#00D4AA',
          light: '#00FFD0',
          dark: '#00A888',
        },
        // Solar color - warm orange for energy/alerts
        solar: {
          DEFAULT: '#FF6B35',
          light: '#FF8F66',
          dark: '#CC5629',
        },
        // Extended slate palette for dark mode
        slate: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
