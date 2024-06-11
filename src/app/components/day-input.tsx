'use client';

import { useRef } from 'react';
import { formatDay, getDiffDays } from '../lib/utils/dating/dating';
import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

export default function DayInput() {
	const dayInputRef = useRef<HTMLInputElement>(null);
	const searchParams = useSearchParams();
	const router = useRouter();
	const params = new URLSearchParams(searchParams);

	const startDate = params.get('tasd');
	const endDate = params.get('taed');
	const handleDayInputRef = () => {
		if (dayInputRef.current?.value) {
			params.set('tasd', formatDay(dayInputRef.current?.value.toString()).startDate);
			params.set('taed', formatDay(dayInputRef.current?.value.toString()).endDate);
			params.set('agsd', formatDay(dayInputRef.current?.value.toString()).startDate);
			params.set('aged', formatDay(dayInputRef.current?.value.toString()).endDate);
			params.set('tesd', formatDay(dayInputRef.current?.value.toString()).startDate);
			params.set('teed', formatDay(dayInputRef.current?.value.toString()).endDate);
			router.replace(`?${params.toString()}`);
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
