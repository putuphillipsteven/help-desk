'use client';

import { useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { getDiffDays, handleUsageDay } from '@/app/lib/utils/dating/dating';

export default function TEADayInput() {
	const dayInputRef = useRef<HTMLInputElement>(null);
	const searchParams = useSearchParams();
	const router = useRouter();
	const params = new URLSearchParams(searchParams);

	const startDate = params.get('tesd');
	const endDate = params.get('teed');
	const handleDayInputRef = () => {
		if (dayInputRef.current?.value) {
			handleUsageDay('team', params, router, dayInputRef);
		}
	};

	return (
		<div className='dropdown flex flex-col items-end gap-y-8 h-full'>
			<div
				tabIndex={0}
				className={clsx('px-4 py-2 cursor-pointer h-full centering-flex rounded-md', {
					'bg-primary text-white': getDiffDays(startDate || '', endDate || '') === 'day',
				})}
			>
				<p
					className={clsx('', {
						'text-white': getDiffDays(startDate || '', endDate || '') === 'day',
					})}
				>
					Day
				</p>
			</div>
			<div
				tabIndex={0}
				className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md mt-14 w-fit'
			>
				<input
					ref={dayInputRef}
					type='date'
					className={
						'h-full w-fit input input-bordered text-primary-text bg-transparent input-md border-[1.5px] border-primary-text focus:ring-0 focus:outline-0'
					}
					onChange={handleDayInputRef}
				/>
			</div>
		</div>
	);
}
