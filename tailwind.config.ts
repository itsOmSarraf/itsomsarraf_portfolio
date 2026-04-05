import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontFamily: {
				heading: ['var(--font-heading)'],
				body: ['var(--font-body)'],
			},
			borderRadius: {
				theme: 'var(--radius)',
				'theme-sm': 'var(--radius-sm)',
				'theme-pill': 'var(--radius-pill)',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
		}
	},
	plugins: []
};
export default config;
