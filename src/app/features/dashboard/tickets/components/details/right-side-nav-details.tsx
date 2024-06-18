import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { getInitials } from '@/app/lib/utils/naming/naming';
import clsx from 'clsx';
import { TicketProps } from '../../data/dummyTickets';
import ProfileAvatar from '../../../components/avatar';

type Content = {
	[key: string]: string | undefined;
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
}: TicketProps): JSX.Element {
	const [openSection, setOpenSection] = useState<number | null>(null);
	const [detailsDisplay, setDetailsDisplay] = useState(false);

	const toggleDetailsDisplay = () => {
		setDetailsDisplay(!detailsDisplay);
	};
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
		<div className='w-full h-full grid grid-rows-[3em_1fr] gap-y-0 border-neutral'>
			<div
				className='w-full h-full centering-flex justify-between p-4 border-b border-neutral cursor-pointer'
				onClick={toggleDetailsDisplay}
			>
				<p className='font-medium'>Details</p>
				{detailsDisplay ? (
					<RiArrowUpSLine className='text-primary-text text-2xl' />
				) : (
					<RiArrowDownSLine className='text-primary-text text-2xl' />
				)}
			</div>
			<div
				className={clsx('', {
					hidden: !detailsDisplay,
				})}
			>
				{sections.map((section) => (
					<div
						key={section.id}
						className='w-full flex flex-col justify-between py-2 px-4 border-b border-neutral cursor-pointer'
					>
						<div
							className='centering-flex justify-between'
							onClick={() => toggleSection(section.id)}
						>
							<p className='text-sm font-medium'>{section.title}</p>
							{openSection === section.id ? (
								<RiArrowUpSLine className='text-primary-text text-2xl' />
							) : (
								<RiArrowDownSLine className='text-primary-text text-2xl' />
							)}
						</div>
						{openSection === section.id && (
							<div className='flex flex-col gap-y-1'>
								{section.title === 'Ticket Info' &&
									Object.entries(section.content).map(([key, value]) => (
										<div key={key} className='centering-flex gap-x-1'>
											<p className='font-medium text-xs text-primary-text'>{key}:</p>
											<p className='text-xs font-medium text-neutral-text'>{value}</p>
										</div>
									))}
								{section.title === 'Responsibility' && (
									<div>
										<div className='flex flex-col gap-y-2'>
											<div className='centering-flex justify-between py-2'>
												<p className='text-xs font-bold'>Team</p>
												<p className='text-xs text-info-text'>Change</p>
											</div>
											<div className='centering-flex gap-x-2'>
												<ProfileAvatar avatarType='company' companyName={team} />
											</div>
										</div>
										<div className='centering-flex justify-between py-2'>
											<div className='w-full flex flex-col gap-y-4'>
												<div className='centering-flex w-full justify-between'>
													<p className='text-xs font-bold'>Agent</p>
													<div className='centering-flex gap-x-2'>
														<p className='text-xs text-info-text'>Assign Me</p>
														<p className='text-xs text-info-text'>Change</p>
													</div>
												</div>
												<div className='centering-flex gap-x-4 w-full '>
													<ProfileAvatar avatarType='profile' name={agent} />
												</div>
											</div>
										</div>
									</div>
								)}
								{section.title === 'Requester' && (
									<div className='centering-flex gap-x-4 w-full py-2'>
										<ProfileAvatar
											avatarType='profile'
											name={user?.username}
											email={user?.username}
										/>
									</div>
								)}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
