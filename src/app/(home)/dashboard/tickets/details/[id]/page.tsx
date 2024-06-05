import MainDetails from '@/app/features/dashboard/tickets/components/details/main-details';
import MainDetailsSkeleton from '@/app/features/dashboard/tickets/components/details/main-details-skeleton';
import { Suspense } from 'react';

export default function Page({ params }: { params: { id: string } }) {
	return (
		<div className='w-full h-full'>
			<Suspense fallback={<MainDetailsSkeleton />}>
				<MainDetails id={params.id} />
			</Suspense>
		</div>
	);
}
