'use client';

import { getInitials } from '@/app/lib/utils/naming/naming';
import { getAgentById } from '../hooks/useAgent';
import { agents } from '../data/agents';
import { getFormattedEmail, getFormattedString } from '../utils/agents';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';
import { getTeamById } from '../hooks/team';
import { teams } from '../data/team';
interface TeamDetailProps {
	id: string;
}

export default function TeamDetails({ id }: TeamDetailProps) {
	const team = getTeamById(teams, +id);
	const [showAgents, setShowAgents] = useState(true); // State variable to toggle visibility
	return (
		<div className='w-full h-full flex flex-col gap-y-2 p-2 md:flex'>
			<div className='hidden lg:flex items-center gap-x-2 w-full '>
				{/* <div className='avatar'>
						<div className='w-10 rounded-full  border-2 border-light-gray-dimata3'>
							<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
						</div>
					</div> */}
				<div className='avatar placeholder'>
					<div className='bg-neutral text-neutral-content rounded-md w-12'>
						<span>{getInitials(team?.name || 'User Name')}</span>
					</div>
				</div>
				<div className='flex flex-col'>
					<p className='text-xs'>{getFormattedString(team?.name || 'Username')}</p>
					<p className='text-xs text-neutral-text'>{team?.members.length} Agents</p>
				</div>
			</div>
			<div className='flex flex-col gap-y-2'>
				<div
					className='centering-flex gap-y-2 cursor-pointer'
					onClick={() => setShowAgents(!showAgents)}
				>
					<MdKeyboardArrowDown className='text-blue-dimata' />
					<p className='text-xs'>Members</p>
				</div>
				{showAgents &&
					team?.members?.map((el) => {
						return (
							<div className='centering-flex gap-x-2' key={el.name}>
								<div className='avatar placeholder'>
									<div className='bg-neutral text-neutral-content rounded-full w-12'>
										<span>{getInitials(el.name || 'Team')}</span>
									</div>
								</div>
								<div className='flex flex-col gap-y-1'>
									<p className='text-xs'>{el.role}</p>
									<p className='text-xs text-neutral-text'>{getFormattedString(el.name)}</p>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
