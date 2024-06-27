'use client';

import { getNextDayDate } from '@/app/lib/utils/dating/dating';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaRegCalendar } from 'react-icons/fa';

export default function TADisplayDate() {
	const searchParams = useSearchParams();
	const ticketActivityStartDate = searchParams.get('tasd');
	const ticketActivityEndDate = searchParams.get('taed');
	return (
		<div className='p-1 text-xs md:text-sm border border-primary-text font-medium h-full centering-flex gap-x-2 md:gap-x-4 rounded-md'>
			<p className='text-xs md:text-sm'>
				{!ticketActivityStartDate ? (
					<span className='loading loading-dots loading-xs'></span>
				) : (
					getNextDayDate(ticketActivityStartDate || '', ticketActivityEndDate || '') || ''
				)}
			</p>
			<FaRegCalendar className='text-primary-text text-sm' />
		</div>
	);
}
