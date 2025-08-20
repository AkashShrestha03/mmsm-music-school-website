/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'devanagari': ['Noto Sans Devanagari', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif']
      },
      colors: {
        'saffron': '#FF6B35',
        'gold': '#FFD700',
        'amber': '#FFB347',
        'copper': '#B87333',
        'maroon': '#800000',
        'deep-red': '#8B0000',
        'cream': '#FFFDD0',
        'warm-white': '#FDF6E3',
        'indigo': '#4B0082',
        'charcoal': '#36454F'
      },
      backgroundImage: {
        'music-pattern': "linear-gradient(45deg, rgba(245, 158, 11, 0.1) 25%, transparent 25%)",
        'mandala': "url('/mandala.png')"
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin 25s linear infinite reverse',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'rotate-in': 'rotateIn 0.8s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-180deg) scale(0.3)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'elegant': '0 20px 40px rgba(0, 0, 0, 0.1)',
        'premium': '0 25px 50px rgba(0, 0, 0, 0.15)',
        'luxury': '0 30px 60px rgba(0, 0, 0, 0.2)',
        'inner-elegant': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
