import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { getTickets } from '../hooks/useTickets';
import { tickets } from './dummyTickets';

interface User {
	username: string;
	email: string;
}

interface TicketProps {
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

// const _ticketLists: WeakMap<object, TicketItemProps[]> = new WeakMap<object, TicketItemProps[]>();

export class Ticket {
	constructor() {}

	async renderTicketLists({
		assignee = 'all',
		status = 'open',
		endDate = '',
		folder = '',
		requester = '',
		startDate = '',
	}: TicketsFilters) {
		const ticketsData = await getTickets(tickets);
		return ticketsData;
	}
}
