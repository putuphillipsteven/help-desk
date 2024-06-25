'use client';

import { TicketProps, tickets } from '../../data/dummyTickets';
import { Ticket } from '../../data/ticket';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TicketListsSkeleton } from '../ticket-list-skeleton';
import { ProfileAvatar } from '../../../components/avatar';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import PrioritySymbol from './components/priority-symbol';
export default function TicketList() {
	const ticket = new Ticket();
	const router = useRouter();

	const [ticketLists, setTicketLists] = useState<TicketProps[]>([]);
	const [loading, setLoading] = useState(true); // Loading state

	const fetchTickets = async () => {
		try {
			await ticket.getTicketLists(tickets).then((data) => setTicketLists(data));
		} catch (error) {
			console.error('Failed to fetch tickets:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchTickets();
	}, []);

	if (loading) {
		return <TicketListsSkeleton />;
	}

	const renderedTicketLists = ticketLists?.map((ticket) => (
		<tr key={ticket.id}>
			<td className='p-2'>
				<input
					type='checkbox'
					className='checkbox checkbox-xs border border-neutral checked:border-primary [--chkbg:theme(colors.primary)] [--chkfg:white] rounded-sm'
				/>
			</td>
			<td className='p-2'>
				<div
					className='centering-flex gap-x-2 w-full cursor-pointer'
					onClick={() => {
						router.push(`tickets/details/${ticket.id}`);
					}}
				>
					<ProfileAvatar name={ticket.user?.username || ''} email={ticket.user?.email || ''} />
				</div>
			</td>
			<td
				className='cursor-pointer p-2'
				onClick={() => {
					router.push(`tickets/details/${ticket.id}`);
				}}
			>
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

	return <tbody>{renderedTicketLists}</tbody>;
}
