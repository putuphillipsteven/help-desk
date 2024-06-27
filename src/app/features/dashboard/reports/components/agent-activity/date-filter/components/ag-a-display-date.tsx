'use client';

import { getNextDayDate } from '@/app/lib/utils/dating/dating';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaRegCalendar } from 'react-icons/fa';

export default function AGADisplayDate() {
	const searchParams = useSearchParams();
	const agentActivityStartDate = searchParams.get('agsd');
	const agentActivityEndDate = searchParams.get('aged');
	return (
		<div className='p-2 border border-primary-text font-medium h-full centering-flex gap-x-4 rounded-md'>
			<p className='text-sm'>
				{!agentActivityStartDate ? (
					<span className='loading loading-dots loading-xs'></span>
				) : (
					getNextDayDate(agentActivityStartDate || '', agentActivityEndDate || '') || ''
				)}
			</p>
			<FaRegCalendar className='text-primary-text text-sm' />
		</div>
	);
}
