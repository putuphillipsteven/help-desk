import DetailsMain from '@/app/features/dashboard/tickets/components/details/details-main';
import { Fragment } from 'react';

export default function Page({ params }: { params: { id: string } }) {
	return (
		<Fragment>
			<DetailsMain id={params.id} />
		</Fragment>
	);
}
