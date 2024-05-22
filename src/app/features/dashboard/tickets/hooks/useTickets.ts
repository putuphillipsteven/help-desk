import { Ticket, tickets } from '../data/tickets';

export const getTicketsById = (id: string): Ticket | undefined => {
	return tickets?.find((ticket) => ticket.id === +id);
};
