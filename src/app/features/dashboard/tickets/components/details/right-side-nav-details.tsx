import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { SlOptions } from 'react-icons/sl';

interface Section {
	id: number;
	title: string;
	content: string[];
}

const sections: Section[] = [
	{ id: 1, title: 'Ticket Info', content: ['Test', 'Test', 'Test', 'Test'] },
	{ id: 2, title: 'Responsibility', content: [] },
	{ id: 3, title: 'Requester', content: [] },
];

const RightSideNavDetails: React.FC = () => {
	const [openSection, setOpenSection] = useState<number | null>(null);

	const toggleSection = (id: number) => {
		setOpenSection(openSection === id ? null : id);
	};

	return (
		<div className='centering-flex-col gap-y-0 h-full  border-r border-light-gray-dimata-5'>
			<div className='w-full h-12 centering-flex justify-between p-2 border-b border-light-gray-dimata-5'>
				<p className='font-medium'>Details</p>
				<SlOptions className='text-2xl text-black-dimata' />
			</div>
			{sections.map((section) => (
				<div
					key={section.id}
					className='w-full h-fit flex flex-col justify-between p-2 border-b border-light-gray-dimata-5 cursor-pointer'
				>
					<div className='centering-flex justify-between' onClick={() => toggleSection(section.id)}>
						<p className='text-sm font-medium'>{section.title}</p>
						<RiArrowDownSLine className='text-black-dimata text-2xl' />
					</div>
					{openSection === section.id && (
						<div className='flex flex-col gap-y-2'>
							{section.content.map((item, index) => (
								<p key={index} className='text-sm'>
									{item}
								</p>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default RightSideNavDetails;
