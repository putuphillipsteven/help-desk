'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import { formatWeek } from '../lib/utils/dating/dating';
import { logging } from '../lib/utils/logging/logging';

export default function WeekInput() {
	const weekInputRef = useRef<HTMLInputElement>(null);
	const searchParams = useSearchParams();
	const router = useRouter();
	const params = new URLSearchParams(searchParams);
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
		<div className='dropdown'>
			<div tabIndex={0} className='p-2 cursor-pointer'>
				<p className='text-primary-text'>Week</p>
			</div>
			<ul
				tabIndex={0}
				className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
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
			</ul>
		</div>
	);
}
