'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import clsx from 'clsx';
import { getDiffDays, handleUsageWeek } from '@/app/lib/utils/dating/dating';

export default function TEAWeekInput() {
	const weekInputRef = useRef<HTMLInputElement>(null);
	const searchParams = useSearchParams();
	const router = useRouter();
	const params = new URLSearchParams(searchParams);

	const startDate = params.get('tesd');
	const endDate = params.get('teed');

	const handleWeekInput = () => {
		handleUsageWeek('team', params, router, weekInputRef);
	};
	return (
		<div className='dropdown flex flex-col items-end gap-y-8 h-full'>
			<div
				tabIndex={0}
				className={clsx(
					'px-2 py-1 sm:px-4 sm:py-2 cursor-pointer h-full centering-flex rounded-md',
					{
						'bg-primary text-white': getDiffDays(startDate || '', endDate || '') === 'week',
					},
				)}
			>
				<p
					className={clsx('text-xs sm:text-sm', {
						'text-white': getDiffDays(startDate || '', endDate || '') === 'week',
					})}
				>
					Week
				</p>
			</div>
			<div
				tabIndex={0}
				className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md mt-14 w-fit'
			>
				<input
					ref={weekInputRef}
					type='week'
					className={
						'h-full w-fit input input-bordered text-primary-text bg-transparent input-md border-[1.5px] border-primary-text focus:ring-0 focus:outline-0'
					}
					onChange={handleWeekInput}
					autoComplete='off'
				/>
			</div>
		</div>
	);
}
