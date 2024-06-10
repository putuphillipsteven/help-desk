'use client';

import { formatToName, getNextDayDate } from '@/app/lib/utils/dating/dating';
import { useRouter, useSearchParams } from 'next/navigation';

export default function MainReportDisplayDate() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const ticketActivityStartDate = searchParams.get('tasd');
	const ticketActivityEndDate = searchParams.get('taed');
	return (
		<div className='p-2 border border-primary-text font-medium h-full centering-flex gap-x-2 rounded-md'>
			<p className='text-sm'>
				{getNextDayDate(ticketActivityStartDate || '', ticketActivityEndDate || '')}
			</p>
		</div>
	);
}
