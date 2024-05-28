'use client';

import { Fragment } from 'react';
import { Agent } from '../data/agents';
import clsx from 'clsx';
import { getInitials } from '@/app/lib/utils/naming/naming';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAgentId } from '../utils/agents';
import { getAgentById } from '../hooks/agent';

interface AgentListProps {
	agents: Agent[];
	children?: React.ReactNode;
}

export default function AgentList({ agents, children }: AgentListProps) {
	const pathname = usePathname();
	const renderedAgents = agents?.map((agent) => {
		return (
			<>
				<tr
					key={agent.id}
					className={clsx('h-[3em]', {
						'bg-primary-content border-l-4 border-primary':
							getAgentId(pathname) === String(agent.id),
					})}
				>
					<td className='centering-flex h-full px-4 py-2 md:pl-20 lg:py-2'>
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
									<p className='text-xs text-neutral-text'>{agent.email}</p>
								</Link>
							</div>
						</div>
					</td>
					<td>
						<div
							className={clsx('badge border-none', {
								'bg-neutral text-primary-text': agent.role === 'Agent',
								'bg-primary text-base-100': agent.role === 'Admin',
							})}
						>
							{agent.role}
						</div>
					</td>
					<td>
						{agent.invitation === 'Waiting' && (
							<div className='hidden lg:flex lg:flex-col gap-y-1 '>
								<p className='text-xs'>Invitation sent</p>
								<p className='text-xs text-info-text'>Sent a reminder</p>
							</div>
						)}
					</td>
				</tr>
				<tr
					className={clsx('', {
						hidden: getAgentId(pathname) !== String(agent.id),
						'bg-primary-content border-l-4 border-primary':
							getAgentId(pathname) === String(agent.id),
					})}
				>
					<td colSpan={3} className='px-4 py-2 md:pl-20 lg:py-2 xl:hidden'>
						{agent.invitation === 'Waiting' && (
							<div className='flex flex-col gap-y-1 lg:hidden'>
								<p className='text-xs'>Invitation sent</p>
								<p className='text-xs text-info-text'>Sent a reminder</p>
							</div>
						)}
						{children}
					</td>
				</tr>
			</>
		);
	});
	return <Fragment>{renderedAgents}</Fragment>;
}
