import { tickets } from '@/app/features/dashboard/tickets/data/tickets';
import { getTickets } from '@/app/features/dashboard/tickets/hooks/useTickets';
import MainTickets from '@/app/features/dashboard/tickets/main-tickets';

export default async function Page() {
	const fetchTickets = await getTickets(tickets);
	return (
		<div className='w-full h-full'>
			<MainTickets tickets={fetchTickets} />
		</div>
	);
}
