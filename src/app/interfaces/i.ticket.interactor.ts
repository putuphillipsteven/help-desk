export interface GetTicketFilter {
	page: number;
	limit: number;
	startDate: string;
	endDate: string;
}

export interface TicketListProps {
	id: string;
	description: string;
	registrationDateTime: string;
	subject: string;
	serviceLevel: string;
	customerId: 1;
	customerName: string;
	customerTeamId: 1;
	createdAt: string;
	updatedAt: string;
}

export interface ITicketInteractor {
	get(filter: GetTicketFilter): Promise<TicketListProps[] | undefined>;
}
