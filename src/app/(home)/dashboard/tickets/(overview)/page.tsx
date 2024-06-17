import { CreateButton } from '@/app/components/button';
import TicketListsTable from '@/app/features/dashboard/tickets/components/ticket-lists/table';

export default async function Page() {
	return (
		<div className='w-full h-full'>
			<div className='grid grid-rows-[3em_3em_1fr] grid-cols-1 w-full h-full'>
				<div className='h-full centering-flex justify-between p-2 border-b border-l border-neutral bg-base-100'>
					<p className='font-medium'>All Recent Tickets</p>
				</div>
				<div className='centering-flex p-2 h-full border-l border-b border-neutral'>
					<CreateButton label='Add Filter' variant='outline' href='/dashboard/tickets' />
				</div>
				<div className='p-2 border-l w-full h-full border-neutral overflow-auto'>
					<TicketListsTable />
				</div>
			</div>
		</div>
	);
}
