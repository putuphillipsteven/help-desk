import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { SlOptions } from 'react-icons/sl';
import { Ticket } from '../../data/tickets';
import { getInitials } from '@/app/lib/utils/naming/naming';

type Content = {
	[key: string]: string | undefined; // Allows keys with string values or undefined
};

interface Section {
	id: number;
	title: string;
	content: Content;
}

export default function RightSideNavDetails({
	agent,
	createdAt,
	id,
	priority,
	status,
	team,
	user,
}: Ticket): JSX.Element {
	const [openSection, setOpenSection] = useState<number | null>(null);

	const sections: Section[] = [
		{
			id: 1,
			title: 'Ticket Info',
			content: {
				'Ticket ID': String(id),
				Created: createdAt,
				'Last Message': createdAt,
				Status: status,
				Priority: priority,
			},
		},
		{
			id: 2,
			title: 'Responsibility',
			content: {
				team: team,
				agent: agent,
			},
		},
		{
			id: 3,
			title: 'Requester',
			content: {
				username: user?.username,
				email: user?.email,
			},
		},
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
						<div className='flex flex-col gap-y-1'>
							{section.title === 'Ticket Info' &&
								Object.entries(section.content).map(([key, value]) => (
									<div key={key} className='centering-flex gap-x-1'>
										<p className='font-medium text-xs text-gray-600'>{key}:</p>
										<p className='text-xs font-medium'>{value}</p>
									</div>
								))}
							{section.title === 'Responsibility' && (
								<div>
									<div className='flex flex-col gap-y-2'>
										<div className='centering-flex justify-between py-2'>
											<p className='text-xs font-bold'>Team</p>
											<p className='text-xs text-blue-dimata-2'>Change</p>
										</div>
										<div className='centering-flex gap-x-2'>
											<div className='avatar placeholder'>
												<div className='bg-neutral text-neutral-content rounded-md w-12'>
													<span>{getInitials(section?.content.team || 'Team')}</span>
												</div>
											</div>
											<div className='flex flex-col gap-y-1'>
												<p className='text-xs'>Default Team</p>
												<p className='text-xs text-light-gray-dimata3'>{section.content.team}</p>
											</div>
										</div>
									</div>
									<div className='centering-flex justify-between py-2'>
										<div className='w-full flex flex-col gap-y-4'>
											<div className='centering-flex w-full justify-between'>
												<p className='text-xs font-bold'>Agent</p>
												<div className='centering-flex gap-x-2'>
													<p className='text-xs text-blue-dimata-2'>Assign Me</p>
													<p className='text-xs text-blue-dimata-2'>Change</p>
												</div>
											</div>
											<div className='centering-flex gap-x-4 w-full '>
												{/* <div className='avatar'>
													<div className='w-10 rounded-full  border-2 border-light-gray-dimata3'>
														<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
													</div>
												</div> */}
												<div className='avatar placeholder'>
													<div className='bg-neutral text-neutral-content rounded-full w-12'>
														<span>{getInitials(section?.content.user || 'User Name')}</span>
													</div>
												</div>
												<div className='flex flex-col'>
													<p className='text-xs'>Username</p>
													<p className='text-xs'>email@email.com</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
							{section.title === 'Requester' && (
								<div className='centering-flex gap-x-4 w-full py-2'>
									{/* <div className='avatar'>
										<div className='w-10 rounded-full  border-2 border-light-gray-dimata3'>
											<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
										</div>
									</div> */}
									<div className='avatar placeholder'>
										<div className='bg-neutral text-neutral-content rounded-full w-12'>
											<span>{getInitials(section?.content.user || 'User Name')}</span>
										</div>
									</div>
									<div className='flex flex-col'>
										<p className='text-xs'>Username</p>
										<p className='text-xs'>email@email.com</p>
									</div>
								</div>
							)}
						</div>
					)}
				</div>
			))}
		</div>
	);
}
