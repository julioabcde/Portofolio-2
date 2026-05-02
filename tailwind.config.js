module.exports = {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'var(--color-primary)',
					light: 'var(--color-primary-light)',
				},
				accent: 'var(--color-accent)',

				background: 'var(--color-background)',
				surface: 'var(--color-surface)',
				foreground: 'var(--color-text)',
				muted: 'var(--color-text-secondary)',
				border: 'var(--color-border)',

				card: 'var(--color-surface)',
			},
			boxShadow: {
				glow: 'var(--shadow-glow)',
				card: 'var(--shadow-card)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)'
			},
			fontFamily: {
				sans: [
					'var(--font-geist-sans)',
					'system-ui',
					'sans-serif'
				],
				mono: [
					'var(--font-geist-mono)',
					'monospace'
				]
			},
			backdropBlur: {
				xs: '2px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
		}
	},
	plugins: [require("tailwindcss-animate")],
};
