/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Fond et surfaces (mode sombre par défaut)
        night: '#070A10',
        panel: '#0C1220',
        edge: '#1B2740',
        // Accents néon du site « en état de marche »
        neon: '#39FF14',
        ice: '#22D3EE',
        // Rouge strictement réservé aux pannes / erreurs
        alert: '#FF2D55',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
