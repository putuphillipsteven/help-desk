import { TicketProps, Tickets } from './dummyTickets';

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

	async getTicketLists(tickets: Tickets): Promise<Tickets> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(tickets);
			}, 4000);
		});
	}

	async getTicketById(id: string, tickets: Tickets): Promise<TicketProps> {
		return new Promise((resolve) => {
			const ticketId = +id;

			let foundTicket = tickets.find((ticket) => ticket.id === ticketId);

			if (foundTicket) {
				setTimeout(() => {
					resolve(foundTicket);
				}, 4000);
			}
		});
	}
}
