export const makeWords = (name: string) => {
	switch (name.toLowerCase()) {
		case 'standard':
			return 'Get Started With...';
		case 'plus':
			return 'All Standard features and...';
		case 'company':
			return 'All Plus features and...';
	}
};
