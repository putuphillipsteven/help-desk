'use client';

import { tickets } from './data/tickets';
import { CreateButton } from '@/app/components/button';
import { useRouter } from 'next/navigation';
import { getInitials } from '@/app/lib/utils/naming/naming';

export default function MainTickets() {
	const router = useRouter();

	// Rendered tickets, mapping from ticket list
	const renderedTickets = tickets?.map((ticket) => {
		return (
			<tr key={ticket.id}>
				<td className='p-2'>
					<input
						type='checkbox'
						className='checkbox checkbox-xs border border-neutral  checked:border-primary [--chkbg:theme(colors.primary)] [--chkfg:white] rounded-sm'
					/>
				</td>
				<td className='p-2'>
					<div
						className='centering-flex gap-x-2 w-full cursor-pointer '
						onClick={() => {
							router.push(`tickets/details/${ticket.id}`);
						}}
					>
						<div className='avatar placeholder w-8'>
							<div className='bg-neutral text-neutral-content rounded-full w-8'>
								<span>{getInitials(ticket?.user?.username || 'User Name')}</span>
							</div>
						</div>
						<div className='flex flex-col'>
							<p className='text-xs'>{ticket.user?.username}</p>
							<p className='text-xs'>{ticket.user?.email}</p>
						</div>
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
		);
	});
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
					<tbody>{renderedTickets}</tbody>
				</table>
			</div>
		</div>
	);
}