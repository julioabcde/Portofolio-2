/** @type {import('tailwindcss').Config} */
// Token contracts:
//   margin-x-*  → page-content side padding (sections, body content)
//   header-x-*  → header/footer side padding (slightly tighter than margin-x)
//   section-y-* → vertical padding for section blocks
//   header-gap  → gap between major header clusters within a section (48px)
//   label-gap   → gap inside a single cluster (label + heading + cta) (24px)
//   rule-gap    → gap above/below a section's ruled divider (80px)
//   rule-gap-sm → mobile/tablet variant of rule-gap (48px)
module.exports = {
	darkMode: ['class'],
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'var(--color-primary)',
					light: 'var(--color-primary-light)',
				},
				accent: 'var(--color-accent)',

				secondary: {
					DEFAULT: 'var(--color-secondary)',
					hover: 'var(--color-secondary-hover)',
				},

				background: 'var(--color-background)',
				surface: 'var(--color-surface)',
				foreground: 'var(--color-text)',
				muted: 'var(--color-text-secondary)',
				border: 'var(--color-border)',

				card: 'var(--color-surface)',
			},

			spacing: {
				// Section vertical padding
				'section-y-sm': '64px',
				'section-y-md': '96px',
				'section-y-lg': '120px',

				// Horizontal margins (container padding)
				'margin-x-sm': '24px',
				'margin-x-md': '40px',
				'margin-x-lg': '64px',

				'header-x-sm': '24px',
				'header-x-md': '32px',
				'header-x-lg': '48px',

				// Inter-element vertical rhythm
				'header-gap': '48px',
				'label-gap': '24px',
				'rule-gap': '80px',
				'rule-gap-sm': '48px',
			},

			maxWidth: {
				'container': '1440px',
			},

			// ─── EXISTING — JANGAN DIHAPUS ──────────────────────────────────────
			boxShadow: {
				glow: 'var(--shadow-glow)',
				card: 'var(--shadow-card)',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
			},
			fontFamily: {
				sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
				mono: ['var(--font-geist-mono)', 'monospace'],
			},
			backdropBlur: {
				xs: '2px',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				fadeInUp: {
					from: { opacity: '0', transform: 'translateY(16px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				fadeInDown: {
					from: { opacity: '0', transform: 'translateY(-12px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				blink: {
					'50%': { opacity: '0' },
				},
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.7s ease-out both',
				'fade-in-up-fast': 'fadeInUp 0.4s ease-out both',
				'fade-in-up-slow': 'fadeInUp 0.8s ease-out both',
				'fade-in-down': 'fadeInDown 0.6s ease-out both',
				blink: 'blink 1s step-end infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}