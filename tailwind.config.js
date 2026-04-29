/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        retro: ['"VT323"', 'monospace'],
      },
      colors: {
        ink: '#070217',
        deep: '#0d0530',
        nebula: '#1a0d44',
        cyan: {
          neon: '#00f0ff',
          soft: '#7df9ff',
        },
        magenta: {
          neon: '#ff2bd6',
          soft: '#ff7be0',
        },
        violet: {
          neon: '#b537f2',
          deep: '#5b21b6',
        },
        gold: {
          neon: '#ffd60a',
          warm: '#ffb800',
        },
        mint: '#4dffb8',
      },
      boxShadow: {
        neonCyan: '0 0 14px rgba(0,240,255,0.6), 0 0 28px rgba(0,240,255,0.3)',
        neonViolet: '0 0 14px rgba(181,55,242,0.7), 0 0 32px rgba(181,55,242,0.35)',
        neonMagenta: '0 0 14px rgba(255,43,214,0.7), 0 0 32px rgba(255,43,214,0.35)',
        neonGold: '0 0 14px rgba(255,184,0,0.8), 0 0 36px rgba(255,184,0,0.45)',
        islandLift: '0 18px 0 -6px rgba(0,0,0,0.45), 0 30px 60px rgba(0,0,0,0.5)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4.5s ease-in-out infinite',
        breathe: 'breathe 3.6s ease-in-out infinite',
        blink: 'blink 5s steps(1, end) infinite',
        drone: 'drone 3.4s ease-in-out infinite',
        twinkle: 'twinkle 2.4s ease-in-out infinite',
        cloud: 'cloud-drift 60s linear infinite',
        'cloud-slow': 'cloud-drift 110s linear infinite',
        rise: 'particle-rise 14s linear infinite',
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pop-in': 'pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        bob: 'bob 3.2s ease-in-out infinite',
        flicker: 'flicker 4s linear infinite',
        scan: 'scan 3.4s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 0.9s ease-out forwards',
        'slide-down': 'slide-down 0.7s ease-out forwards',
        'slide-right': 'slide-right 0.7s ease-out forwards',
        'slide-left': 'slide-left 0.7s ease-out forwards',
        wobble: 'wobble 6s ease-in-out infinite',
        'bar-grow': 'bar-grow 1.4s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(-1px) scaleY(1.015)' },
        },
        blink: {
          '0%, 92%, 100%': { transform: 'scaleY(1)' },
          '94%, 96%': { transform: 'scaleY(0.05)' },
        },
        drone: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(-2deg)' },
          '25%': { transform: 'translate(6px, -8px) rotate(2deg)' },
          '50%': { transform: 'translate(0, -14px) rotate(-1deg)' },
          '75%': { transform: 'translate(-6px, -6px) rotate(2deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        'cloud-drift': {
          '0%': { transform: 'translateX(-15%)' },
          '100%': { transform: 'translateX(115%)' },
        },
        'particle-rise': {
          '0%': { transform: 'translateY(20vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '90%': { opacity: '0.9' },
          '100%': { transform: 'translateY(-110vh) translateX(40px)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow:
              '0 0 18px rgba(255,184,0,0.6), 0 0 40px rgba(255,184,0,0.35), inset 0 0 18px rgba(255,255,255,0.3)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow:
              '0 0 30px rgba(255,184,0,0.95), 0 0 70px rgba(255,184,0,0.55), inset 0 0 24px rgba(255,255,255,0.45)',
            transform: 'scale(1.025)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pop-in': {
          '0%': { transform: 'scale(0.4)', opacity: '0' },
          '70%': { transform: 'scale(1.08)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-4px) rotate(1deg)' },
        },
        flicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.7' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
        'bar-grow': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--bar-final, 60%)' },
        },
      },
    },
  },
  plugins: [],
}
