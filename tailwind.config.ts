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
				'purple-int-gradient': 'linear-gradient(to right, #7573FF, #625FFB)',
				'green-gradient': 'linear-gradient(to right, #D6F4DC, #FFFFFF)',
			},
			colors: {
				'black-dimata': '#303030',
				'black-dimata1': '#263238',
				'black-dimata2': '#4E4E4E',
				'purple-dimata': '#625FFB',
				'purple-dimata1': '#7976FF',
				'blue-dimata': '#2D68FE',
				'blue-dimata-2': '#1D4ED8',
				'blue-dimata-3': '#2563EB',
				'light-blue-dimata': '#EFF6FF',
				'light-gray-dimata': '#F6F6F6',
				'light-gray-dimata1': '#FAFAFA',
				'light-gray-dimata2': '#EAEAEA',
				'light-gray-dimata3': '#878787',
				'light-gray-dimata4': '#EEEEEE',
				'light-gray-dimata-5': '#D4D4D4',
				'orange-dimata': '#E2992B',
				'orange-dimata1': '#FFF3E1',
				'orange-dimata-2': '#EAB308',
				'green-dimata': '#47A15B',
			},
		},
		borderRadius: {
			sm: '0.125rem',
			md: '0.375rem',
			lg: '0.5rem',
			xl: '0.75rem',
			full: '9999px',
			'4xl': '48px',
		},
	},
	plugins: [require('daisyui')],
};
export default config;
