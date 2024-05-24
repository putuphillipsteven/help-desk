import { Fragment } from 'react';
import { Agent } from '../data/agents';
import clsx from 'clsx';
import { getInitials } from '@/app/lib/utils/naming/naming';
import Link from 'next/link';

interface AgentListProps {
	agents: Agent[];
}

export default function AgentList({ agents }: AgentListProps) {
	const renderedAgents = agents?.map((agent) => {
		return (
			<tr className='h-12'>
				<td className='centering-flex h-full pl-20'>
					<div className='centering-flex gap-x-6 w-full '>
						{/* <div className='avatar'>
							<div className='w-10 rounded-full  border-2 border-light-gray-dimata3'>
								<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
							</div>
						</div> */}
						<div className='avatar placeholder w-10'>
							<div className='bg-neutral text-neutral-content rounded-full w-12'>
								<span>{getInitials(agent.name)}</span>
							</div>
						</div>
						<div className='flex flex-col'>
							<Link href={`/dashboard/agents/agent/${agent.id}?na=asc`}>
								<p className='text-xs'>{agent.name}</p>
								<p className='text-xs'>{agent.email}</p>
							</Link>
						</div>
					</div>
				</td>
				<td>
					<div
						className={clsx('badge border-none', {
							'bg-light-gray-dimata-5 text-black-dimata': agent.role === 'Agent',
							'bg-blue-dimata-2 text-white': agent.role === 'Admin',
						})}
					>
						{agent.role}
					</div>
				</td>
				<td>
					{agent.invitation === 'Waiting' && (
						<div className='flex flex-col gap-y-1'>
							<p className='text-xs'>Invitation sent</p>
							<p className='text-xs text-blue-dimata-2'>Sent a reminder</p>
						</div>
					)}
				</td>
			</tr>
		);
	});
	return <Fragment>{renderedAgents}</Fragment>;
}
