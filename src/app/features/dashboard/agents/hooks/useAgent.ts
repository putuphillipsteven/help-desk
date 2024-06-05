import { Agent, Agents } from '../data/agents';

export const getAgentById = (agents: Agents, id: number): Agent | undefined => {
	return agents.find((agent) => agent.id === id);
};

export const getAgents = (agents: Agents): Promise<Agents> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(agents);
		}, 5000);
	});
};
