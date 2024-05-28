'use client';

import { getInitials } from '@/app/lib/utils/naming/naming';
import { getAgentById } from '../hooks/agent';
import { agents } from '../data/agents';
import { getFormattedEmail, getFormattedString } from '../utils/agents';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';
interface AgentDetailsProps {
	id: string;
}

export default function AgentDetails({ id }: AgentDetailsProps) {
	const agent = getAgentById(agents, +id);
	const [showTeams, setShowTeams] = useState(true); // State variable to toggle visibility
	return (
		<div className='w-full h-full flex flex-col gap-y-2 p-2 md:flex'>
			<div className='hidden md:flex items-center gap-x-2 w-full '>
				{/* <div className='avatar'>
						<div className='w-10 rounded-full  border-2 border-neutral'>
							<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
						</div>
					</div> */}
				<div className='avatar placeholder'>
					<div className='bg-neutral text-neutral-content rounded-full w-12'>
						<span>{getInitials(agent?.name || 'User Name')}</span>
					</div>
				</div>
				<div className='flex flex-col'>
					<p className='text-xs'>{getFormattedString(agent?.name || 'Username')}</p>
					<p className='text-xs text-neutral-text'>{getFormattedEmail(agent?.email || '@')}</p>
				</div>
			</div>
			<div className='flex flex-col gap-y-2'>
				<div
					className='centering-flex gap-y-2 cursor-pointer'
					onClick={() => setShowTeams(!showTeams)}
				>
					<MdKeyboardArrowDown className='text-blue-dimata' />
					<p className='text-xs'>Teams</p>
				</div>
				{showTeams &&
					agent?.teams?.map((team) => {
						return (
							<div className='centering-flex gap-x-2'>
								<div className='avatar placeholder'>
									<div className='bg-neutral text-neutral-content rounded-md w-12'>
										<span>{getInitials(team.name || 'Team')}</span>
									</div>
								</div>
								<div className='flex flex-col gap-y-1'>
									<p className='text-xs'>{team.name}</p>
									<p className='text-xs text-neutral-text'>{getFormattedString(team.leader)}</p>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
