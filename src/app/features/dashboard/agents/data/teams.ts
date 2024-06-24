interface Member {
	name: string;
	role: string;
}

export interface TeamsProps {
	id: number;
	name: string;
	members: Member[];
}

export class Teams {
	constructor() {}

	public async getTeams(teams: TeamsProps[]): Promise<TeamsProps[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(teams);
			}, 2000);
		});
	}
	public async getTeamDetails(
		teams: TeamsProps[],
		teamId: string,
	): Promise<TeamsProps | undefined> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					const team = teams.find((team) => String(team.id) === teamId);
					resolve(team);
				} catch (err) {
					reject(err);
				}
			}, 2000);
		});
	}
}
