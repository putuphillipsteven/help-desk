type Team = {
	name: string;
	leader: string;
};

export interface AgentsProps {
	id: number;
	name: string;
	email: string;
	role: 'Admin' | 'Agent';
	invitation?: 'Accepted' | 'Waiting';
	teams?: Team[];
}

export class Agents {
	constructor() {}

	public async getAgents(agents: AgentsProps[]): Promise<AgentsProps[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(agents);
			}, 2000);
		});
	}
}
