import { GetTicketFilter, TicketListProps } from './i.ticket.interactor';

export interface ITicketRepository {
	getTicket(filter: GetTicketFilter): Promise<TicketListProps[] | undefined>;
}
