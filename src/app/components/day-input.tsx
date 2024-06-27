'use client';

import { useRef } from 'react';
import { formatDay, getDiffDays, handleUsageDay } from '../lib/utils/dating/dating';
import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

interface DayInputProps {
	usage?: string;
	isGLobal: boolean;
}

export default function DayInput({ usage, isGLobal }: DayInputProps) {
	const dayInputRef = useRef<HTMLInputElement>(null);
	const searchParams = useSearchParams();
	const router = useRouter();
	const params = new URLSearchParams(searchParams);

	const startDate = params.get('tasd');
	const endDate = params.get('taed');
	const handleDayInputRef = () => {
		if (dayInputRef.current?.value) {
			handleUsageDay(usage || '', params, router, dayInputRef);
		}
	};

	return (
		<div className='dropdown flex flex-col items-start md:items-end gap-y-8 h-full'>
			<div
				tabIndex={0}
				className={clsx(
					'px-2 py-1 sm:px-4 sm:py-2 cursor-pointer h-full centering-flex rounded-md',
					{
						'bg-primary text-white':
							getDiffDays(startDate || '', endDate || '') === 'day' && isGLobal,
					},
				)}
			>
				<p
					className={clsx('text-xs sm:text-sm', {
						'text-white': getDiffDays(startDate || '', endDate || '') === 'day' && isGLobal,
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
