import { resolve } from 'path';
import { Team } from './dummyTeams';
import { agents } from './dummyAgents';

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

	public getAgents(paramsAgents: AgentsProps[]): Promise<AgentsProps[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(paramsAgents);
			}, 2000);
		});
	}
}
