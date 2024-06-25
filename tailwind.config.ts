import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xs: '370px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'orange-gradient': 'linear-gradient(to right, #FFEDD1, #FFFFFF)',
				'purple-gradient': 'linear-gradient(to right, #D3D2FF, #FFFFFF)',
				'purple-int-gradient': 'linear-gradient(to right, #7573FF, #625FFB)',
				'green-gradient': 'linear-gradient(to right, #D6F4DC, #FFFFFF)',
				'login-gradient':
					'linear-gradient(to bottom, rgba(2,0,36,0) 0%, rgba(70,95,241,0.5) 37%, rgba(70,95,241,0.7) 100%)',
			},
			colors: {
				'primary-text': '#324054',
				'secondary-text': '#6B7280',
				'info-text': '#2D68FE',
				'neutral-text': '#71839B',
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
	daisyui: {
		themes: [
			{
				dimataTheme: {
					primary: '#2D68FE',
					'primary-content': '#EFF6FF',
					'base-100': '#ffffff',
					'base-200': '#F3F4F6',
					'base-300': '#71839B',
					'base-content': '#B5B7C0',
					secondary: '#2D68FE',
					'secondary-content': '#EFF6FF',
					neutral: '#D4D4D4',
					info: '#EAB308',
					success: '#22C55E',
					warning: '#EAB308',
					error: '#FF472E',
					'alert-content': '#ffffff',
				},
			},
		],
		logs: false,
	},
	plugins: [require('daisyui')],
};
export default config;
