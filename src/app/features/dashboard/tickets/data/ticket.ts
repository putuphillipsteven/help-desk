interface User {
	username: string;
	email: string;
}

export interface TicketProps {
	id: number | undefined;
	subject: string | undefined;
	createdAt: string | undefined;
	user: User | undefined;
	team: string | undefined;
	agent: string | 'unassigned' | undefined;
	priority: string | undefined;
	status: string | undefined;
	details: string | undefined;
}

export type Tickets = TicketProps[];

export interface TicketsFilters {
	assignee: string | 'all';
	status: string | 'open';
	requester?: string | '';
	folder?: string | '';
	startDate?: string | '';
	endDate?: string | '';
}

export class Ticket {
	constructor() {}

	async getTicketLists(tickets: Tickets): Promise<TicketProps[]> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(tickets);
			}, 4000);
		});
	}
}
