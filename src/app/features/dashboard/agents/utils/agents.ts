export const getAgentId = (url: string) => {
	const regex = /agent\/([a-zA-Z0-9]+)/;
	const match = url.match(regex);

	if (match && match[1]) {
		return match[1];
	}

	return 0;
};

export const getFormattedEmail = (email: string): string => {
	const emailParts = email.split('@');
	const domain = emailParts[1] ? `@${emailParts[1]}` : '';
	return `${emailParts[0].slice(0, 4)}...${domain}`;
};

export const getFormattedString = (input: string): string => {
	if (input.length <= 10) {
		return input;
	}
	return `${input.slice(0, 10)}...`;
};
