'use client';

import { useRef } from 'react';
import { logging } from '../lib/utils/logging/logging';
import { useRouter, useSearchParams } from 'next/navigation';
import { formatMonth } from '../lib/utils/dating/dating';

export default function MonthInput() {
	const monthInputRef = useRef<HTMLInputElement>(null);
	const searchParams = useSearchParams();
	const router = useRouter();
	const params = new URLSearchParams(searchParams);
	const handleMonthInput = () => {
		logging('[monthInput]', monthInputRef.current?.valueAsDate);
		if (monthInputRef.current?.valueAsDate) {
			params.set('tasd', formatMonth(monthInputRef.current?.valueAsDate.toString()).startDate);
			params.set('taed', formatMonth(monthInputRef.current?.valueAsDate.toString()).endDate);
			params.set('agsd', formatMonth(monthInputRef.current?.valueAsDate.toString()).startDate);
			params.set('aged', formatMonth(monthInputRef.current?.valueAsDate.toString()).endDate);
			params.set('tesd', formatMonth(monthInputRef.current?.valueAsDate.toString()).startDate);
			params.set('teed', formatMonth(monthInputRef.current?.valueAsDate.toString()).endDate);
			router.replace(`?${params.toString()}`);
		}
	};
	return (
		<div className='dropdown'>
			<div tabIndex={0} className='p-2 cursor-pointer'>
				<p className='text-primary-text'>Month</p>
			</div>
			<ul
				tabIndex={0}
				className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
			>
				<input
					type='month'
					ref={monthInputRef}
					className={
						'h-full w-fit input input-bordered text-primary-text bg-transparent input-md border-[1.5px] border-primary-text focus:ring-0 focus:outline-0'
					}
					onChange={handleMonthInput}
				/>
			</ul>
		</div>
	);
}
