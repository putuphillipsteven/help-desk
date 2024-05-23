import CreateTicket from '@/app/features/dashboard/tickets/components/create/main-create-ticket';
import { Fragment } from 'react';

export default function Page({ params: string }: { params: { id: string } }) {
	return (
		<Fragment>
			<CreateTicket />
		</Fragment>
	);
}
