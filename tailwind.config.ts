import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}'],
	theme: {
		screens: { xs: '26rem', sm: '40rem', md: '48rem', lg: '64rem', xl: '80rem' },
		container: { center: true, padding: { DEFAULT: '1.5rem', xl: '6rem' } },
		extend: {
			transitionDuration: { DEFAULT: '300ms' },
			fontFamily: {
				sans: ['Be Vietnam Pro', 'sans-serif'],
				serif: ['Awesome Serif', 'serif'],
			},
			spacing: Object.fromEntries([...Array(70).keys()].slice(17).map(val => [val * 4, `${val}rem`])),
			transitionDelay: Object.fromEntries([...Array(20).keys()].map(val => [val * 50, `${val * 50}ms`])),
			colors: {
				green: {
					700: '#1F7E2A',
					950: '#033220',
				},
				lime: {
					200: '#D2FF86',
				},
				orange: {
					100: '#F7E5CF',
				},
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('reveal', '.reveal &')
			addVariant('revealed', '.revealed &')
		}),
	],
} satisfies Config
