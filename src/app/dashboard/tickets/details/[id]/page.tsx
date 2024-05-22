import CreateTicket from '@/app/features/dashboard/tickets/components/create-tickets';
import { Fragment } from 'react';

export default function Page({ params: string }: { params: { id: string } }) {
	const { id } = string;
	console.log(`id`, id);
	return (
		<Fragment>
			<p>Ticket Details</p>
		</Fragment>
	);
}
