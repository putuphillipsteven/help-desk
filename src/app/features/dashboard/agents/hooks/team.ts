import { Team } from '../data/team';

export const getTeamById = (teams: Team[], id: number): Team | undefined => {
	return teams.find((team) => team.id === id);
};
