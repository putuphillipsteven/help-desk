'use client';

import { CreateButton } from '@/app/components/button';
import { filters } from '../../data/filters';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { useState } from 'react';
import clsx from 'clsx';
export default function LeftSideNavCreateTickets() {
	const [filterDisplay, setFiterDisplay] = useState(true);

	const toggleFilterDisplay = () => {
		setFiterDisplay(!filterDisplay);
	};

	const renderedFilters = filters?.map((filter, index) => {
		return (
			<div key={index} className='w-full flex flex-col gap-y-2'>
				<p className='text-sm text-primary'>{filter.name}</p>
				{filter.children?.map((child, index) => {
					return (
						<div key={index} className='centering-flex justify-between cursor-pointer'>
							<p className='text-sm hover:font-bold'>{child?.name}</p>
							<div className='bg-neutral p-1 rounded-xl'>
								<p className='text-sm'>{child?.notification}</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	});
	return (
		<div className='w-full h-fit bg-white grid grid-rows-[3em_1fr]'>
			<div className='h-full centering-flex justify-between p-2 border-b border-neutral bg-base-100'>
				<p className='font-medium'>Tickets</p>
				<CreateButton label='New Tickets' variant='filled' href='/dashboard/tickets/create' />
			</div>
			<div className={clsx('w-full h-fit flex flex-col gap-y-4 p-2')}>
				<input
					type='text'
					className='input input-sm rounded-lg bg-base-200 text-primary-text placeholder:text-base-300 border-none focus:ring-0 focus:border-none focus:outline-0'
					placeholder='Search Ticket...'
				/>
				<div
					className='w-full flex items-center gap-x-2 cursor-pointer'
					onClick={toggleFilterDisplay}
				>
					<p className='text-sm'>Filter</p>
					{filterDisplay ? (
						<MdOutlineKeyboardArrowUp className='text-primary-text' />
					) : (
						<MdOutlineKeyboardArrowDown className='text-primary-text' />
					)}
				</div>
				<div
					className={clsx('flex flex-col h-fit gap-y-4 overflow-x-scroll no-scrollbar', {
						hidden: !filterDisplay,
					})}
				>
					{renderedFilters}
				</div>
			</div>
		</div>
	);
}
