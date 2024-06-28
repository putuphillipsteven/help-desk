import { TeamProps } from './team.model';
import { TicketAgentProps } from './ticket.model';

export interface AgentsProps {
	id: number;
	name: string;
	email: string;
	role: 'Admin' | 'Agent';
	invitation?: 'Accepted' | 'Waiting';
	teams?: TeamProps[];
	tickets?: TicketAgentProps[];
}
