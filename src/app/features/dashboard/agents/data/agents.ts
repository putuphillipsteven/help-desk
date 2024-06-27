type Team = {
	name: string;
	leader: string;
};

type Ticket = {
	requester: string;
	subject: string;
	priority: string;
};

export interface AgentsProps {
	id: number;
	name: string;
	email: string;
	role: 'Admin' | 'Agent';
	invitation?: 'Accepted' | 'Waiting';
	teams?: Team[];
	tickets?: Ticket[];
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

	public async getAgentDetails(
		agents: AgentsProps[],
		agentId: string,
	): Promise<AgentsProps | undefined> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					const agent = agents.find((agent) => String(agent.id) === agentId);
					resolve(agent);
				} catch (err) {
					reject(err);
				}
			}, 2000);
		});
	}
}
