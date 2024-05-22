import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { SlOptions } from 'react-icons/sl';
import { Ticket } from '../../data/tickets';

interface TicketInfo {
	'Ticket ID': string;
	Created: string;
	'Last Message': string;
	Status: string;
	Rating: string;
	Priority: string;
	Tags: string;
}

interface Section {
	id: number;
	title: string;
	content: object[];
}

export default function RightSideNavDetails({
	agent,
	createdAt,
	id,
	priority,
	status,
	subject,
	team,
	user,
}: Ticket): JSX.Element {
	const [openSection, setOpenSection] = useState<number | null>(null);

	const sections: Section[] = [
		{
			id: 1,
			title: 'Ticket Info',
			content: [
				{
					'Ticket Id': { id },
				},
				{
					Created: { createdAt },
				},
				{
					'Last message': { createdAt },
				},
				{
					Status: { status },
				},
			],
		},
		{ id: 2, title: 'Responsibility', content: [{}] },
		{ id: 3, title: 'Requester', content: [{}] },
	];

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
								<div key={index}></div>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
}
