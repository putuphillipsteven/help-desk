'use client';

import { Fragment } from 'react';
import clsx from 'clsx';
import { getInitials } from '@/app/lib/utils/naming/naming';
import { usePathname } from 'next/navigation';
import { Teams } from '../data/team';
import { getTeamId } from '../utils/team';
import ProfileAvatar from '../../components/avatar';
import { agents } from '../data/agents';

interface TeamListProps {
	teams: Teams;
	children?: React.ReactNode;
}

export default function TeamList({ teams, children }: TeamListProps) {
	const pathname = usePathname();

	const renderedTeams = teams?.map((team) => {
		return (
			<Fragment key={team.id}>
				<tr
					key={team.id}
					className={clsx('h-fit', {
						'bg-primary-content border-l-4 border-primary': getTeamId(pathname) === String(team.id),
					})}
				>
					<td className='centering-flex h-full px-4 py-2 lg:pl-20 lg:py-2'>
						<div className='centering-flex gap-x-6 w-full '>
							<ProfileAvatar avatarType='company' agents={agents.length} companyName={team?.name} />
						</div>
					</td>
					<td>
						<div className='avatar-group -space-x-4 w-full'>
							{team?.members?.map((el) => {
								return (
									<div className='avatar placeholder' key={el.name}>
										<div className='bg-neutral text-neutral-content rounded-full w-8 border-primary-content outline-none'>
											<span>{getInitials(el?.name || 'User Name')}</span>
										</div>
									</div>
								);
							})}
						</div>
					</td>
					<td>
						<div className='hidden'>
							<p className='text-xs'>Invitation sent</p>
							<p className='text-xs text-info-text'>Sent a reminder</p>
						</div>
					</td>
				</tr>
				<tr
					className={clsx('', {
						hidden: getTeamId(pathname) !== String(team.id),
						'bg-primary-content border-l-4 border-primary': getTeamId(pathname) === String(team.id),
					})}
				>
					<td colSpan={3} className='px-4 py-2 lg:pl-20 lg:py-2 lg:hidden'>
						{children}
					</td>
				</tr>
			</Fragment>
		);
	});
	return <Fragment>{renderedTeams}</Fragment>;
}
