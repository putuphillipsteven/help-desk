import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'orange-gradient': 'linear-gradient(to right, #FFEDD1, #FFFFFF)',
				'purple-gradient': 'linear-gradient(to right, #D3D2FF, #FFFFFF)',
				'green-gradient': 'linear-gradient(to right, #D6F4DC, #FFFFFF)',
			},
			colors: {
				'black-dimata': '#303030',
				'black-dimata1': '#263238',
				'black-dimata2': '#4E4E4E',
				'purple-dimata': '#625FFB',
				'light-gray-dimata': '#F6F6F6',
				'light-gray-dimata1': '#FAFAFA',
				'orange-dimata': '#E2992B',
				'orange-dimata1': '#FFF3E1',
			},
		},
		borderRadius: {
			'4xl': '48px',
		},
	},
	plugins: [require('daisyui')],
};
export default config;
