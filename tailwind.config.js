module.exports = {
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
				subtle: 'var(--color-text-muted)',
				border: 'var(--color-border)',

				card: 'var(--color-surface)',
			},

			spacing: {
				'section-y-sm': '64px',
				'section-y-md': '96px',
				'section-y-lg': '120px',

				'margin-x-sm': '24px',
				'margin-x-md': '40px',
				'margin-x-lg': '64px',

				'header-x-sm': '24px',
				'header-x-md': '32px',
				'header-x-lg': '48px',

				'header-gap': '48px',
				'label-gap': '24px',
				'rule-gap': '80px',
				'rule-gap-sm': '48px',
			},

			maxWidth: {
				'container': '1440px',
			},

			boxShadow: {
				glow: 'var(--shadow-glow)',
				card: 'var(--shadow-card)',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
			},
			fontFamily: {
				sans: ['var(--font-inter)', '-apple-system', 'sans-serif'],
				display: ['var(--font-playfair)', 'Georgia', 'serif'],
				mono: ['var(--font-space-mono)', 'var(--font-geist-mono)', 'monospace'],
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
				blink: {
					'50%': { opacity: '0' },
				},
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				blink: 'blink 1s step-end infinite',
				marquee: 'marquee 40s linear infinite',
			},
		},
	},
	plugins: [],
}