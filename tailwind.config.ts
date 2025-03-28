import {heroui} from '@heroui/theme';
/* eslint-disable @typescript-eslint/no-require-imports */
// tailwind.config.js or tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/(date-picker|spinner|button|ripple|calendar|date-input|form|popover).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'laptop': "url('https://images.unsplash.com/photo-1741850826386-9cb8e5543c73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'partnership': "url('/path/to/partnership-background.jpg')",
        'innovation': "url('/path/to/innovation-background.jpg')",
        'digital': "url('/path/to/digital-background.jpg')"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      }
    },
    
  variants: {
    extend: {
      flexGrow: ['group-hover'],
      opacity: ['group-hover']
    }
  },
  },
  plugins: [require('tailwindcss-animate'),require('tailwindcss-motion'),heroui()],
}

export default config