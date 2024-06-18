import { Team, Teams } from '../data/dummyTeams';

export const getTeamById = (teams: Team[], id: number): Team | undefined => {
	return teams.find((team) => team.id === id);
};

export const getTeams = (teams: Teams): Promise<Teams> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(teams);
		}, 5000);
	});
};
