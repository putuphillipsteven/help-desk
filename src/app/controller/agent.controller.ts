import { AgentsProps } from '../entities/agent.model';

export class AgentController {
	constructor() {}
	async getAgentLists(agentLists: AgentsProps[]): Promise<AgentsProps[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(agentLists);
			}, 2000);
		});
	}
	async getAgentById(agentLists: AgentsProps[], id: number): Promise<AgentsProps | undefined> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					const agent = agentLists.find((agent) => agent.id === id);
					resolve(agent);
				} catch (err) {
					reject(err);
				}
			}, 2000);
		});
	}
}
