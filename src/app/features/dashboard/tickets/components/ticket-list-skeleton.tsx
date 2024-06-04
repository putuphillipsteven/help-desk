import { CreateButton } from '@/app/components/button';
import React from 'react';

export default function TicketListSkeleton() {
	return (
		<tr>
			<td className='p-2'>
				<div className='w-4 h-4  border border-neutral bg-neutral rounded-sm skeleton'></div>
			</td>
			<td className='p-2'>
				<div className='centering-flex gap-x-2 w-full cursor-pointer'>
					<div className='avatar placeholder w-8'>
						<div className='bg-neutral skeleton rounded-full w-8 h-8'></div>
					</div>
					<div className='flex flex-col'>
						<p className='text-xs bg-neutral skeleton w-24 h-2 '></p>
						<p className='text-xs bg-neutral skeleton w-32 h-2  mt-1'></p>
					</div>
				</div>
			</td>
			<td className='cursor-pointer p-2'>
				<p className='text-sm bg-neutral skeleton w-full h-4'></p>
			</td>
			<td className='p-2'>
				<p className='text-sm bg-neutral skeleton w-full h-4'></p>
			</td>
			<td className='p-2'>
				<div className='badge bg-neutral skeleton border-transparent gap-2 text-base-100 w-16 h-4'></div>
			</td>
			<td className='p-2'>
				<p className='text-sm bg-neutral skeleton w-full h-4'></p>
			</td>
		</tr>
	);
}

export function TicketListsSkeleton() {
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
							<th className='font-medium text-primary-text p-2 w-[30em]'>Subject</th>
							<th className='font-medium text-primary-text p-2'>Agent</th>
							<th className='font-medium text-primary-text p-2'>Status</th>
							<th className='font-medium text-primary-text p-2'>Last Message</th>
						</tr>
					</thead>
					<tbody>
						<TicketListSkeleton />
						<TicketListSkeleton />
						<TicketListSkeleton />
						<TicketListSkeleton />
						<TicketListSkeleton />
					</tbody>
				</table>
			</div>
		</div>
	);
}
