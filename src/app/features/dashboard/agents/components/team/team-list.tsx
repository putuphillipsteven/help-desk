import { Fragment } from 'react';
import clsx from 'clsx';
import { TeamIdURL } from '../id-url';
import { Teams } from '../../data/teams';
import { teamLists as dummyTeams } from '../../data/dummyTeams';
import { CompanyAvatar, MemberListAvatar } from '../../../components/avatar';

interface TeamListProps {
	page: string;
	name: string;
	teamId: string;
}

export default async function TeamList({ name, page, teamId }: TeamListProps) {
	const teams = new Teams();
	const teamLists = await teams.getTeams(dummyTeams);
	const renderedTeamLists = teamLists?.map((team) => {
		return (
			<Fragment key={team.id}>
				<tr
					key={team.id}
					className={clsx('h-fit', {
						'bg-primary-content border-l-4 border-primary': teamId === String(team.id),
					})}
				>
					<td className='centering-flex h-full px-4 py-2 lg:pl-20'>
						<div className='centering-flex gap-x-6 w-full hover:cursor-pointer'>
							<TeamIdURL teamId={String(team?.id)}>
								<CompanyAvatar
									numberOfAgents={String(team?.members?.length)}
									teamName={team?.name}
								/>
							</TeamIdURL>
						</div>
					</td>
					<td>
						<div className='avatar-group -space-x-4 w-full'>
							{team?.members?.map((member) => {
								return <MemberListAvatar name={member?.name} />;
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
						hidden: teamId !== String(team.id),
						'bg-primary-content border-l-4 border-primary': teamId === String(team.id),
					})}
				>
					<td colSpan={3} className='px-4 py-2 lg:pl-20 lg:py-2 lg:hidden'></td>
				</tr>
			</Fragment>
		);
	});
	return <Fragment>{renderedTeamLists}</Fragment>;
}
