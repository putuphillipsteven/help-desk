'use client';

import { Fragment } from 'react';
import { Agent } from '../data/agents';
import clsx from 'clsx';
import { getInitials } from '@/app/lib/utils/naming/naming';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Team } from '../data/team';
import { getTeamId } from '../utils/team';
import { getFormattedEmail, getFormattedString } from '../utils/agents';

interface TeamListProps {
	team: Team[];
}

export default function TeamList({ team }: TeamListProps) {
	const pathname = usePathname();
	const renderedAgents = team?.map((team) => {
		return (
			<tr
				className={clsx('h-12', {
					'bg-primary-content border-l-4 border-primary': getTeamId(pathname) === String(team.id),
				})}
			>
				<td className='centering-flex h-full pl-20 py-2'>
					<div className='centering-flex gap-x-6 w-full '>
						{/* <div className='avatar'>
							<div className='w-10 rounded-full  border-2 border-light-gray-dimata3'>
								<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
							</div>
						</div> */}
						<div className='avatar placeholder w-10'>
							<div className='bg-neutral text-neutral-content rounded-md w-12'>
								<span>{getInitials(team?.name)}</span>
							</div>
						</div>
						<div className='flex flex-col'>
							<Link href={`/dashboard/agents/team/${team.id}?na=asc`}>
								<p className='text-xs'>{team.name}</p>
								<p className='text-xs text-neutral-text'>{team?.members.length} agents</p>
							</Link>
						</div>
					</div>
				</td>
				<td>
					<div className='avatar-group -space-x-4'>
						{team?.members?.map((el) => {
							return (
								<div className='avatar placeholder'>
									<div className='bg-neutral text-neutral-content rounded-full w-8 border-primary-content outline-none'>
										<span>{getInitials(el?.name || 'User Name')}</span>
									</div>
								</div>
							);
						})}
					</div>
				</td>
				<td></td>
			</tr>
		);
	});
	return <Fragment>{renderedAgents}</Fragment>;
}
