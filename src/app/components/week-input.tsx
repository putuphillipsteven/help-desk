'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import { formatWeek, getDiffDays } from '../lib/utils/dating/dating';
import { logging } from '../lib/utils/logging/logging';
import clsx from 'clsx';

export default function WeekInput() {
	const weekInputRef = useRef<HTMLInputElement>(null);
	const searchParams = useSearchParams();
	const router = useRouter();
	const params = new URLSearchParams(searchParams);

	const startDate = params.get('tasd');
	const endDate = params.get('taed');

	const handleWeekInput = () => {
		if (weekInputRef.current?.valueAsDate) {
			logging('[weekInput]', weekInputRef.current.valueAsDate);
			params.set('tasd', formatWeek(weekInputRef.current?.valueAsDate.toString()).startDate);
			params.set('taed', formatWeek(weekInputRef.current?.valueAsDate.toString()).endDate);
			params.set('agsd', formatWeek(weekInputRef.current?.valueAsDate.toString()).startDate);
			params.set('aged', formatWeek(weekInputRef.current?.valueAsDate.toString()).endDate);
			params.set('tesd', formatWeek(weekInputRef.current?.valueAsDate.toString()).startDate);
			params.set('teed', formatWeek(weekInputRef.current?.valueAsDate.toString()).endDate);
			router.replace(`?${params.toString()}`);
		}
	};
	return (
		<div className='dropdown flex flex-col items-end gap-y-8 h-full'>
			<div
				tabIndex={0}
				className={clsx('px-4 py-2 cursor-pointer h-full centering-flex rounded-md', {
					'bg-primary text-white': getDiffDays(startDate || '', endDate || '') === 'week',
				})}
			>
				<p
					className={clsx('', {
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
