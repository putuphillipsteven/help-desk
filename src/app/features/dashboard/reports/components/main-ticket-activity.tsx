'use client';

import { formatDate } from '@/app/lib/utils/dating/dating';
import { logging } from '@/app/lib/utils/logging/logging';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function MainTicketActivity() {
	return (
		<div className='w-full h-full flex flex-col shadow-lg p-2 rounded-md'>
			<div className='header-ticket-activity h-fit w-full'>
				<p>Ticket Activity</p>
			</div>
			<div className='header-ticket-activity h-fit w-full'>
				<p>Ticket Activity</p>
			</div>
			<div className='body-ticket-activity flex-1 w-full'>
				<p>Body</p>
			</div>
		</div>
	);
}
