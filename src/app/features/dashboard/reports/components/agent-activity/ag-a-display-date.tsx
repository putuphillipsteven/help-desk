'use client';

import { getNextDayDate } from '@/app/lib/utils/dating/dating';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaRegCalendar } from 'react-icons/fa';

export default function AGADisplayDate() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const ticketActivityStartDate = searchParams.get('agsd');
	const ticketActivityEndDate = searchParams.get('aged');
	return (
		<div className='p-2 border border-primary-text font-medium h-full centering-flex gap-x-4 rounded-md'>
			<p className='text-sm'>
				{getNextDayDate(ticketActivityStartDate || '', ticketActivityEndDate || '')}
			</p>
			<FaRegCalendar className='text-primary-text text-sm' />
		</div>
	);
}
