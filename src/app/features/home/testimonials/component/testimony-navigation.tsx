'use client';

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import clsx from 'clsx';

export default function TestimonyNavigation() {
	const [activeItem, setActiveItem] = useState('item1');

	const handleNext = () => {
		const items = ['item1', 'item3', 'item4'];
		const currentIndex = items.indexOf(activeItem);
		const nextIndex = (currentIndex + 1) % items.length;
		setActiveItem('item4');
	};

	return (
		<div className='centering-flex gap-x-16'>
			<div className='flex justify-center w-full py-2 gap-2'>
				<a
					href='#item1'
					className={clsx('w-4 h-4 rounded-box', {
						'bg-black-dimata': activeItem === 'item1',
						'bg-gray-500': activeItem !== 'item1',
					})}
					onClick={() => setActiveItem('item1')}
				></a>
				<a
					href='#item4'
					className={clsx('w-4 h-4 rounded-box', {
						'bg-black-dimata': activeItem === 'item4',
						'bg-gray-500': activeItem !== 'item4',
					})}
					onClick={() => setActiveItem('item4')}
				></a>
			</div>
			<button
				className='btn btn-ghost hidden rounded-4xl text-black-dimata bg-light-gray-dimata'
				onClick={handleNext}
			>
				Next
				<FaArrowRight className='text-purple-dimata' />
			</button>
		</div>
	);
}
