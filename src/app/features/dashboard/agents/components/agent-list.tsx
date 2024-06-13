'use client';

import { Fragment } from 'react';
import { Agents } from '../data/agents';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getAgentId } from '../utils/agents';
import ProfileAvatar from '../../components/avatar';
import { logging } from '@/app/lib/utils/logging/logging';

interface AgentListProps {
	agents: Agents;
}

export default function AgentList({ agents }: AgentListProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const agentId = searchParams.get('agId');
	const name = searchParams.get('na');
	const role = searchParams.get('ro');
	const sort = name ? `na=${name}` : `ro=${role}`;
	const renderedAgents = agents?.map((agent) => {
		return (
			<Fragment key={agent.id}>
				<tr
					className={clsx('h-fit cursor-pointer', {
						'bg-primary-content border-l-4 border-primary':
							getAgentId(pathname) === String(agent.id),
					})}
					onClick={() => {
						router.replace(`${pathname}?${sort}&agId=${agent.id}`);
					}}
				>
					<td className='centering-flex h-full px-4 py-2 lg:pl-20 lg:py-2'>
						<ProfileAvatar avatarType='profile' name={agent.name} email={agent.email} />
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
					<td colSpan={3} className='px-4 py-2 lg:pl-20 lg:py-2 lg:hidden'></td>
				</tr>
			</Fragment>
		);
	});
	return <Fragment>{renderedAgents}</Fragment>;
}
