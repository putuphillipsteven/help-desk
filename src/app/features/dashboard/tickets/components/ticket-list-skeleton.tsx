import { CreateButton } from '@/app/components/button';
import React from 'react';

function TicketListSkeleton() {
	return (
		<tr>
			<td className='p-2'>
				<div className='w-4 h-4  border border-neutral bg-neutral rounded-sm skeleton'></div>
			</td>
			<td className='p-2'>
				<div className='centering-flex gap-x-2 w-full cursor-pointer'>
					<div className='avatar placeholder'>
						<div className='bg-neutral skeleton rounded-full w-10 h-10'></div>
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
		<tbody>
			<TicketListSkeleton />
			<TicketListSkeleton />
			<TicketListSkeleton />
			<TicketListSkeleton />
			<TicketListSkeleton />
		</tbody>
	);
}
