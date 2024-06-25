import { CreateButton } from '@/app/components/button';
import Alert from '@/app/features/dashboard/sidenav/components/alert';
import LeftSideNavCreateTickets from '@/app/features/dashboard/tickets/components/create/left-side-nav-create-tickets';
import TicketListsTable from '@/app/features/dashboard/tickets/components/ticket-lists/ticket-lists-table';
import React from 'react';

export default function Page() {
	return (
		<div className='w-full h-full flex flex-col lg:flex-row '>
			<div className='w-full lg:w-[240px] h-auto '>
				<LeftSideNavCreateTickets />
			</div>
			<div className='flex-1 grid grid-rows-[3em_3em_1fr] grid-cols-1 w-full h-full'>
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
