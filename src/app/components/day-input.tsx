'use client';

import { useRef } from 'react';
import { formatDay } from '../lib/utils/dating/dating';
import { useRouter, useSearchParams } from 'next/navigation';

export default function DayInput() {
	const dayInputRef = useRef<HTMLInputElement>(null);
	const searchParams = useSearchParams();
	const router = useRouter();
	const params = new URLSearchParams(searchParams);

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
		<div className='dropdown'>
			<div tabIndex={0} className='p-2 cursor-pointer'>
				<p className='text-primary-text'>Day</p>
			</div>
			<ul
				tabIndex={0}
				className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
			>
				<input
					ref={dayInputRef}
					type='date'
					className={
						'h-full w-fit input input-bordered text-primary-text bg-transparent input-md border-[1.5px] border-primary-text focus:ring-0 focus:outline-0'
					}
					onChange={handleDayInputRef}
				/>
			</ul>
		</div>
	);
}
