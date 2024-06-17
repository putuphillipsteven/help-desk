import { Ticket } from '../data/dummyTickets';

export const getTicketsById = (id: string, tickets: Ticket[]): Promise<Ticket | undefined> => {
	return new Promise((resolve) => {
		const ticketId = +id;
		let foundTicket: Ticket | undefined;

		foundTicket = tickets.find((ticket) => ticket.id === ticketId);

		if (foundTicket) {
			setTimeout(() => {
				resolve(foundTicket);
			}, 4000);
		}
	});
};

export const getTickets = (tickets: Ticket[]): Promise<Ticket[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(tickets);
		}, 4000);
	});
};
