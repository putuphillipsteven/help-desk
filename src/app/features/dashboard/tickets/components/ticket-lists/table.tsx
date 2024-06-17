'use client';

import { useSearchParams } from 'next/navigation';
import TicketList from './ticket-list';
import { TicketsFilters } from '../../data/ticket';

export default function TicketListsTable() {
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);

	const assignee = params.get('ass') || '';
	const status = params.get('sta') || '';
	const folder = params.get('fo') || '';
	const requester = params.get('req') || '';
	const startDate = params.get('sd') || '';
	const endDate = params.get('ed') || '';

	const filter: TicketsFilters = {
		assignee: assignee,
		status: status,
		folder: folder,
		requester: requester,
		startDate: startDate,
		endDate: endDate,
	};

	return (
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
				<TicketList filter={filter} />
			</tbody>
		</table>
	);
}
