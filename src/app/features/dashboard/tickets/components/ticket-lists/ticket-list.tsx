'use client';

import { useRouter } from 'next/navigation';
import { Ticket, Tickets, TicketsFilters } from '../../data/ticket';
import { useEffect, useState } from 'react';
import ProfileAvatar from '../../../components/avatar';

interface TicketListsProps {
	filter: TicketsFilters;
}

export default function TicketList({ filter }: TicketListsProps) {
	const router = useRouter();

	const ticket = new Ticket();

	const [ticketLists, setTicketLists] = useState<Tickets | null>([]);

	const fetchTickets = async () => {
		const tickets = await ticket.renderTicketLists(filter);
		setTicketLists(tickets);
	};

	useEffect(() => {
		fetchTickets();
	}, []);

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
					<ProfileAvatar
						avatarType='profile'
						name={ticket.user?.username}
						email={ticket.user?.email}
					/>
				</div>
			</td>
			<td
				className='cursor-pointer p-2'
				onClick={() => {
					router.push(`tickets/details/${ticket.id}`);
				}}
			>
				<p className='text-sm w-full line-clamp-2'>{ticket.subject}</p>
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
				<p className='text-sm line-clamp-2'>Last 5 minutes</p>
			</td>
		</tr>
	));
	return renderedTicketLists;
}
