'use client';

import React, { useState } from 'react';

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
		<div className='w-full max-w-md mx-auto mt-10 flex flex-col gap-y-4'>
			{sections.map((section, index) => (
				<div key={index} className='bg-red-100'>
					<div className='bg-base-200 p-4 rounded-lg shadow-md'>
						<div
							className='collapse collapse-arrow'
							onClick={function () {
								handleToggle(index);
							}}
						>
							<div className='collapse-title text-xl font-medium flex justify-between items-center cursor-pointer'>
								{section.title}
								<span>{activeIndex === index ? '▲' : '▼'}</span>
							</div>
							{activeIndex === index && (
								<div className='collapse-content mt-2'>
									<p>{section.content}</p>
								</div>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
