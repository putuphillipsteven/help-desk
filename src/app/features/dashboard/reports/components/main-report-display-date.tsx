'use client';

import { getNextDayDate } from '@/app/lib/utils/dating/dating';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaRegCalendar } from 'react-icons/fa';

interface MainReportDisplayDateProps {
	isGlobal?: boolean;
}
export default function MainReportDisplayDate({ isGlobal }: MainReportDisplayDateProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const ticketActivityStartDate = searchParams.get('tasd' || '---');
	const ticketActivityEndDate = searchParams.get('taed' || '---');
	return (
		<div className='p-2 border border-primary-text font-medium h-full centering-flex gap-x-4 rounded-md'>
			<p className='text-sm'>
				{!ticketActivityStartDate ? (
					<span className='loading loading-dots loading-xs'></span>
				) : isGlobal ? (
					getNextDayDate(ticketActivityStartDate || '', ticketActivityEndDate || '')
				) : (
					'Mixed'
				)}
			</p>
			<FaRegCalendar className='text-primary-text text-sm' />
		</div>
	);
}
