/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          glow: 'hsl(var(--primary-glow))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        lp: {
          /** Solution chart frame — Figma base + stripe overlay */
          'chart-frame': 'rgba(172, 176, 220, 0.1)',
          navy: '#0f1d43',
          'card-dark': '#303851',
          'accent-blue': '#4D6DD5',
          purple: '#7677FB',
          'text-dark': '#151a28',
          'text-title': '#17234C',
          'text-muted': '#636a7e',
          'number-label': '#546087',
          orange: '#FE7652',
          'green-state': '#ECFFDF',
          bg: '#fcfcfd',
          divider: '#e3e6ed',
          'hero-canvas': '#f8f8fb',
          'aurora-blue': 'rgba(35, 127, 200, 0.1)',
          'aurora-purple': 'rgba(107, 95, 202, 0.08)',
          'mesh-surface': '#fbfaf8',
          'mesh-cell': '#e3e4e8',
          'mesh-alert': '#e38088',
          'mesh-warn': '#f3c470',
          'mesh-pass': '#6bc49a',
          'mesh-border': '#e4e4e4',
          'mockup-surface': '#f8f7f3',
          'mockup-hairline': '#dcdee2',
          'mockup-violation': '#fff5f3',
          'mockup-ink': '#0b0d13',
          'mockup-label': '#4a4d54',
          'mockup-muted': '#777a82',
          'mockup-bubble-border': '#c4c8d2',
          'mockup-bar': '#afd2f4',
          'mockup-sparkline': '#2a9d67'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        'card-light':
          '0px 10.68px 33.23px 0px rgba(0,0,0,0.08), 0px 5.93px 10.68px 0px rgba(0,0,0,0.04), 0px 2.37px 3.56px 0px rgba(0,0,0,0.03)',
        'card-strong':
          '0px 10.68px 33.23px 0px rgba(0,0,0,0.18), 0px 5.93px 10.68px 0px rgba(0,0,0,0.10), 0px 2.37px 3.56px 0px rgba(0,0,0,0.08)',
        'mockup-float':
          '0px 12px 20px rgba(15, 17, 23, 0.08), 0px 1px 0px rgba(15, 17, 23, 0.04)',
        'mockup-window':
          '0px 24px 60px -12px rgba(15, 17, 23, 0.18), 0px 2px 4px 0px rgba(15, 17, 23, 0.04)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-scale': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(30px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px hsl(var(--primary-glow) / 0.3)'
          },
          '50%': {
            boxShadow: '0 0 40px hsl(var(--primary-glow) / 0.5)'
          }
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' }
        },
        'mesh-walk-leg-a': {
          '0%, 100%': { transform: 'rotate(-16deg)' },
          '50%': { transform: 'rotate(16deg)' }
        },
        'mesh-walk-leg-b': {
          '0%, 100%': { transform: 'rotate(16deg)' },
          '50%': { transform: 'rotate(-16deg)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-scale': 'fade-in-scale 0.5s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        glow: 'glow 3s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'mesh-walk-leg': 'mesh-walk-leg-a 1.1s ease-in-out infinite',
        'mesh-walk-leg-alt': 'mesh-walk-leg-b 1.1s ease-in-out infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
