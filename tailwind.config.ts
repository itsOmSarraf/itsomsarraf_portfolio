import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			animation: {
				'gradient-x': 'gradient-x 15s ease infinite',
				'gradient-y': 'gradient-y 15s ease infinite',
				'gradient-xy': 'gradient-xy 15s ease infinite',
				blob: 'blob 7s infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			},
			keyframes: {
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				'gradient-y': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'top center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'bottom center'
					}
				},
				'gradient-xy': {
					'0%, 100%': {
						'background-size': '400% 400%',
						'background-position': 'left top'
					},
					'25%': {
						'background-position': 'right top'
					},
					'50%': {
						'background-position': 'right bottom'
					},
					'75%': {
						'background-position': 'left bottom'
					}
				},
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)'
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)'
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)'
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1)'
					}
				}
			},
			backgroundImage: {
				'grid-white':
					'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)'
			},
			transitionProperty: {
				height: 'height',
				spacing: 'margin, padding'
			},
			transformStyle: {
				'3d': 'preserve-3d'
			},
			perspective: {
				'1000': '1000px'
			}
		}
	},
	plugins: []
};
export default config;
