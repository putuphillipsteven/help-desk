'use client';

import { useRouter } from 'next/navigation';
import { Ticket } from '../ticket';

export default function TicketList() {
	const router = useRouter();

	const ticket = new Ticket({ router });

	return ticket.renderTicketLists();
}
