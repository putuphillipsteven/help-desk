import { GetTicketFilter, ITicketInteractor } from '../interfaces/i.ticket.interactor';

export class TicketController {
	private interactor: ITicketInteractor;

	constructor(interactor: ITicketInteractor) {
		this.interactor = interactor;
	}

	async onGetTicket(filter: GetTicketFilter) {
		try {
			const ticket = await this.interactor.get(filter);
			return ticket;
		} catch (error: any) {
			console.error('TicketController Error:', error);
			throw error;
		}
	}
}
