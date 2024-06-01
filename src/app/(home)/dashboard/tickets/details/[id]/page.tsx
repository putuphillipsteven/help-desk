import MainDetails from '@/app/features/dashboard/tickets/components/details/main-details';

export default function Page({ params }: { params: { id: string } }) {
	return (
		<div className='w-full h-full'>
			<MainDetails id={params.id} />
		</div>
	);
}
