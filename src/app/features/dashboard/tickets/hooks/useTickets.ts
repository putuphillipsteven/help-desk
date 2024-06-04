import { Ticket, tickets } from '../data/tickets';

export const getTicketsById = (id: string): Ticket | undefined => {
	return tickets?.find((ticket) => ticket.id === +id);
};

export const getTickets = (tickets: Ticket[]): Promise<Ticket[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(tickets);
		}, 2000); // Simulate a 2-second delay
	});
};
