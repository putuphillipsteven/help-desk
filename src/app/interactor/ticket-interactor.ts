import { GetTicketFilter, ITicketInteractor } from '../interfaces/i.ticket.interactor';
import { ITicketRepository } from '../interfaces/i.ticket.repository';

export class TicketInteractor implements ITicketInteractor {
	private repository: ITicketRepository;

	constructor(repository: ITicketRepository) {
		this.repository = repository;
	}

	async get(filter: GetTicketFilter) {
		try {
			const ticket = await this.repository.getTicket(filter);
			return ticket;
		} catch (error) {
			throw error; // Rethrow the error for higher-level handling
		}
	}
}
