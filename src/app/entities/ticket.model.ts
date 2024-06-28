import { UserProps } from './user.model';

export interface TicketProps {
	id: number | undefined;
	subject: string | undefined;
	createdAt: string | undefined;
	requester: UserProps | undefined;
	team: string | undefined;
	agent: string | 'unassigned' | undefined;
	priority: string | undefined;
	status: string | undefined;
	details: string | undefined;
}

export interface TicketAgentProps
	extends Omit<
		TicketProps,
		'createdAt' | 'team' | 'details' | 'agent' | 'details' | 'status' | 'id' | 'requester'
	> {
	requester: string;
}
