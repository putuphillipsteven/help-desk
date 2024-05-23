import MainDetails from '@/app/features/dashboard/tickets/components/details/main-details';
import { Fragment } from 'react';

export default function Page({ params }: { params: { id: string } }) {
	return (
		<Fragment>
			<MainDetails id={params.id} />
		</Fragment>
	);
}
