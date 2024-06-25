import React from 'react';

function TicketListSkeleton() {
	return (
		<tr>
			<td className='p-2 w-fit'>
				<div className='w-4 h-4  border border-neutral bg-neutral rounded-sm skeleton'></div>
			</td>
			<td className='p-2 w-fit'>
				<div className='centering-flex gap-x-2 w-full cursor-pointer'>
					<div className='avatar placeholder'>
						<div className='bg-neutral skeleton rounded-full w-8 h-8'></div>
					</div>
					<div className='flex flex-col'>
						<p className='text-xs bg-neutral skeleton w-24 h-2 '></p>
						<p className='text-xs bg-neutral skeleton w-32 h-2  mt-1'></p>
					</div>
				</div>
			</td>
			<td className='cursor-pointer p-2 w-full'>
				<p className='text-sm bg-neutral skeleton  w-50  h-4'></p>
			</td>
			<td className='p-2 w-fit'>
				<p className='text-sm bg-neutral skeleton w-20 h-4'></p>
			</td>
			<td className='p-2 w-fit'>
				<div className='badge bg-neutral skeleton border-transparent gap-2 text-base-100 w-20 h-4'></div>
			</td>
			<td className='p-2 w-40'>
				<p className='text-sm bg-neutral skeleton w-40 h-4'></p>
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
