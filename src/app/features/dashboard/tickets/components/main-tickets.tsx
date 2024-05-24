'use client';

import { Fragment } from 'react';
import { tickets } from '../data/tickets';
import { CreateButton } from '@/app/components/button';
import { useRouter } from 'next/navigation';
import { getInitials } from '@/app/lib/utils/naming/naming';

export default function MainTickets() {
	const router = useRouter();
	const renderedTickets = tickets?.map((ticket) => {
		return (
			<tr key={ticket.id}>
				<td className=''>
					<input
						type='checkbox'
						className='checkbox checkbox-sm border  checked:border-blue-dimata [--chkbg:theme(colors.blue-dimata)] [--chkfg:white] rounded-sm'
					/>
				</td>
				<td>
					<div
						className='centering-flex gap-x-2 w-full cursor-pointer'
						onClick={() => {
							router.push(`tickets/details/${ticket.id}`);
						}}
					>
						<div className='avatar placeholder w-10'>
							<div className='bg-neutral text-neutral-content rounded-full w-12'>
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
					className='cursor-pointer'
					onClick={() => {
						router.push(`tickets/details/${ticket.id}`);
					}}
				>
					<p className='text-sm'>{ticket.subject}</p>
				</td>
				<td>
					<p className='text-sm'>{ticket.agent}</p>
				</td>
				<td>
					<div className='badge bg-blue-dimata-2 border-transparent gap-2 text-white'>
						{ticket.status}
					</div>
				</td>
				<td>
					<p className='text-sm'>Last 5 minutes</p>
				</td>
			</tr>
		);
	});
	return (
		<Fragment>
			<div className='h-12 centering-flex justify-between p-2 border-b border-light-gray-dimata-5'>
				<p className='font-medium'>All Recent Tickets</p>
			</div>
			<div className='p-2 border-b border-light-gray-dimata-5'>
				<CreateButton label='Add Filter' variant='outline' href='/dashboard/tickets' />
			</div>
			<div className='p-2'>
				<table className='w-full text-black-dimata border-separate'>
					<thead className=''>
						<tr className='text-sm text-left uppercase h-8'>
							<th className='font-medium'>
								<input
									type='checkbox'
									className='checkbox checkbox-sm border  checked:border-blue-dimata [--chkbg:theme(colors.blue-dimata)] [--chkfg:white] rounded-sm'
								/>
							</th>
							<th className='font-medium'>Requester</th>
							<th className='font-medium'>Subject</th>
							<th className='font-medium'>Agent</th>
							<th className='font-medium'>Status</th>
							<th className='font-medium'>Last Message</th>
						</tr>
					</thead>
					<tbody>{renderedTickets}</tbody>
				</table>
			</div>
		</Fragment>
	);
}
