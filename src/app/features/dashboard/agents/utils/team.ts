export const getTeamId = (url: string) => {
	const regex = /team\/([a-zA-Z0-9]+)/;
	const match = url.match(regex);

	if (match && match[1]) {
		return match[1];
	}

	console.log(match);

	return 0;
};
