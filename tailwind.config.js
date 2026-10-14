/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080B12', // Deep black
        navy: {
          950: '#080B12',
          900: '#0B0F19',
          800: '#10172A', // Dark navy
          700: '#1E293B',
          600: '#334155'
        },
        electric: {
          DEFAULT: '#4263FF', // Electric blue
          hover: '#314fd1',
          light: '#6582ff',
          glow: 'rgba(66, 99, 255, 0.4)'
        },
        violet: {
          DEFAULT: '#8B5CF6', // Violet
          hover: '#7c3aed',
          light: '#a78bfa',
          glow: 'rgba(139, 92, 246, 0.4)'
        },
        cyan: {
          DEFAULT: '#22D3EE', // Cyan accents
          hover: '#06b6d4',
          light: '#67e8f9',
          glow: 'rgba(34, 211, 238, 0.4)'
        },
        light: '#F8FAFC', // White text
        muted: '#94A3B8', // Muted gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at 50% -20%, rgba(66,99,255,0.25) 0%, rgba(139,92,246,0.15) 45%, rgba(8,11,18,0) 80%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'card-glow': 'radial-gradient(circle at 50% 0%, rgba(66, 99, 255, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(66, 99, 255, 0.3)',
        'glow-md': '0 0 25px -5px rgba(66, 99, 255, 0.4)',
        'glow-lg': '0 0 40px -10px rgba(139, 92, 246, 0.5)',
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
