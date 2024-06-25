import React, { Suspense } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import PrioritySymbol from './components/priority-symbol';
import { ProfileAvatar } from '../../../components/avatar';
import { Ticket } from '../../data/ticket';
import { tickets } from '../../data/dummyTickets';
import { TicketListsSkeleton } from '../ticket-list-skeleton';

export default async function TicketListsTable() {
	const ticket = new Ticket();
	const ticketLists = await ticket.getTicketLists(tickets);
	const renderedTicketLists = ticketLists?.map((ticket) => (
		<tr key={ticket.id}>
			<td className='p-2'>
				<input
					type='checkbox'
					className='checkbox checkbox-xs border border-neutral checked:border-primary [--chkbg:theme(colors.primary)] [--chkfg:white] rounded-sm'
				/>
			</td>
			<td className='p-2'>
				<div className='centering-flex gap-x-2 w-full cursor-pointer'>
					<ProfileAvatar name={ticket.user?.username || ''} email={ticket.user?.email || ''} />
				</div>
			</td>
			<td className='cursor-pointer p-2'>
				<div className='centering-flex gap-x-2'>
					<PrioritySymbol priority={ticket?.priority} />
					<p className='text-sm w-full line-clamp-2'>{ticket.subject}</p>
				</div>
			</td>
			<td className='p-2'>
				<p className='text-sm line-clamp-2'>{ticket.agent}</p>
			</td>
			<td className='p-2'>
				<div className='badge bg-primary border-transparent gap-2 text-base-100'>
					{ticket.status}
				</div>
			</td>
			<td className='p-2'>
				<p className='text-sm line-clamp-2'>5 minutes ago</p>
			</td>
			<td>
				<HiOutlineDotsHorizontal className='text-black text-2xl' />
			</td>
		</tr>
	));
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
					<th className='font-medium text-primary-text p-2'></th>
				</tr>
			</thead>
			<tbody>{renderedTicketLists}</tbody>
		</table>
	);
}
