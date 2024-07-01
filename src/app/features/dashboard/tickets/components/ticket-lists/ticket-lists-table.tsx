import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import PrioritySymbol from './components/priority-symbol';
import { ProfileAvatar } from '../../../components/avatar';
import { TicketController } from '@/app/controller/ticket-controller';
import { TicketInteractor } from '@/app/interactor/ticket-interactor';
import { TicketRepository } from '@/app/repository/ticket.repository';
import Link from 'next/link';

const ticketRepository = new TicketRepository();
const ticketInteractor = new TicketInteractor(ticketRepository);
const ticketController = new TicketController(ticketInteractor);

export default async function TicketListsTable() {
	const ticketLists = await ticketController.onGetTicket({
		endDate: '2024-06-05T23:59:59',
		limit: 10,
		page: 1,
		startDate: '2024-06-05T00:00:00',
	});

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
					<Link href={`tickets/details/${ticket?.id}`}>
						<ProfileAvatar name={ticket.customerName || 'Username'} email={'Email undefined'} />
					</Link>
				</div>
			</td>
			<td className='cursor-pointer p-2'>
				<div className='centering-flex gap-x-2'>
					<PrioritySymbol priority={ticket?.serviceLevel} />
					<p className='text-sm w-full line-clamp-2'>{ticket.subject}</p>
				</div>
			</td>
			<td className='p-2'>
				<p className='text-sm line-clamp-2'>Agent undefined</p>
			</td>
			<td className='p-2'>
				<div className='badge bg-primary border-transparent gap-2 text-base-100'>
					<p>Status undefined</p>
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
