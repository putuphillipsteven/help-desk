'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

const sections = [
	{
		title: 'Support',
		content:
			'Shorten the time between intent and purchase by connecting with visitors when they’re on your website, and most likely to act.',
	},
	{
		title: 'Engage',
		content: 'Engage content goes here.',
	},
	{
		title: 'Convert',
		content: 'Convert content goes here.',
	},
];

export default function Accordion() {
	const [activeIndex, setActiveIndex] = useState(0);

	function handleToggle(index: number) {
		setActiveIndex(index === activeIndex ? -1 : index);
	}

	return (
		<div className='w-full max-w-md mx-auto mt-10 flex flex-col gap-y-4 self-start'>
			{sections.map((section, index) => (
				<div key={index} className='p-8 bg-light-gray-dimata2 rounded-box'>
					<div className='p-4 rounded-lg shadow-md'>
						<div
							className='flex flex-col gap-y-4 hover:cursor-pointer'
							onClick={function () {
								handleToggle(index);
							}}
						>
							<div className='collapse-title font-medium flex justify-between items-center cursor-pointer text-black-dimata'>
								<h3 className='font-bold'>{section.title}</h3>
								{activeIndex === index ? (
									<div className='p-4 rounded-badge bg-purple-dimata'>
										<IoIosArrowDown className='text-white' />
									</div>
								) : (
									<div className='p-4 rounded-badge bg-black-dimata'>
										<IoIosArrowForward className='text-white' />
									</div>
								)}
							</div>
							{activeIndex === index && (
								<div className='collapse-content mt-2'>
									<p className='font-light text-sm'>{section.content}</p>
								</div>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
