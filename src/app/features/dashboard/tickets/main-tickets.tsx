'use client';

import { Ticket } from './data/tickets';
import { CreateButton } from '@/app/components/button';
import { getInitials } from '@/app/lib/utils/naming/naming';
import { useRouter } from 'next/navigation';
import ProfileAvatar from '../components/avatar';
import TicketList from './components/ticket-list';

interface MainTicketProps {
	tickets: Ticket[];
}

export default function MainTickets({ tickets }: MainTicketProps) {
	const router = useRouter();

	return (
		<div className='grid grid-rows-[3em_3em_1fr] grid-cols-1 w-full h-full'>
			<div className='h-full centering-flex justify-between p-2 border-b border-l border-neutral bg-base-100'>
				<p className='font-medium'>All Recent Tickets</p>
			</div>
			<div className='centering-flex p-2 h-full border-l border-b border-neutral'>
				<CreateButton label='Add Filter' variant='outline' href='/dashboard/tickets' />
			</div>
			<div className='p-2 border-l w-full h-full border-neutral overflow-auto'>
				<table className='w-full text-black-dimata border-separate overflow-auto'>
					<thead className=''>
						<tr className='text-sm text-left uppercase h-8'>
							<th className='font-medium p-2 w-8'>
								<input
									type='checkbox'
									className='checkbox checkbox-xs border border-neutral  checked:border-primary [--chkbg:theme(colors.primary)] [--chkfg:white] rounded-sm'
								/>
							</th>
							<th className='font-medium text-primary-text p-2 w-[10em]'>Requester</th>
							<th className='font-medium text-primary-text p-2'>Subject</th>
							<th className='font-medium text-primary-text p-2'>Agent</th>
							<th className='font-medium text-primary-text p-2'>Status</th>
							<th className='font-medium text-primary-text p-2'>Last Message</th>
						</tr>
					</thead>
					<tbody>
						<TicketList />
					</tbody>
				</table>
			</div>
		</div>
	);
}
