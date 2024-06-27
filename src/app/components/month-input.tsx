'use client';

import { useRef } from 'react';
import { logging } from '../lib/utils/logging/logging';
import { useRouter, useSearchParams } from 'next/navigation';
import { formatMonth, getDiffDays } from '../lib/utils/dating/dating';
import clsx from 'clsx';

interface MonthInputProps {
	usage?: string;
	isGLobal: boolean;
}
export default function MonthInput({ isGLobal }: MonthInputProps) {
	const monthInputRef = useRef<HTMLInputElement>(null);
	const searchParams = useSearchParams();
	const router = useRouter();
	const params = new URLSearchParams(searchParams);
	const startDate = params.get('tasd');
	const endDate = params.get('taed');

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
		<div className='dropdown flex flex-col items-end gap-y-8 h-full'>
			<div
				tabIndex={0}
				className={clsx(
					'px-2 py-1 sm:px-4 sm:py-2 cursor-pointer h-full centering-flex rounded-md',
					{
						'bg-primary text-white':
							getDiffDays(startDate || '', endDate || '') === 'month' && isGLobal,
					},
				)}
			>
				<p
					className={clsx('text-xs sm:text-sm', {
						'text-white': getDiffDays(startDate || '', endDate || '') === 'month' && isGLobal,
					})}
				>
					Month
				</p>
			</div>
			<ul
				tabIndex={0}
				className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md mt-14 w-fit'
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
