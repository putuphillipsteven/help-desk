import { Fragment } from 'react';
import clsx from 'clsx';
import { TeamIdURL } from '../id-url';
import { Teams } from '../../data/teams';
import { teamLists as dummyTeams } from '../../data/dummyTeams';
import { CompanyAvatar, MemberListAvatar } from '../../../components/avatar';
import TeamDetails from './team-details';

interface TeamListProps {
	page: string;
	name: string;
	teamId: string;
}

export default async function TeamList({ name, page, teamId }: TeamListProps) {
	const teams = new Teams();
	const teamLists = await teams.getTeams(dummyTeams);

	const renderedTeamLists = teamLists?.map((team) => {
		const activeTeams = teamId === String(team?.id);
		return (
			<Fragment key={team?.id}>
				<tr
					className={clsx('h-[4em]', {
						'bg-primary-content border-l-4 border-primary': activeTeams,
					})}
				>
					<td className='centering-flex h-full px-4 py-2 lg:pl-16'>
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
							{team?.members?.map((member) => (
								<MemberListAvatar key={member?.name} name={member?.name} />
							))}
						</div>
					</td>
					<td>
						<div className='hidden'>
							<p className='text-xs'>Invitation sent</p>
							<p className='text-xs text-info-text'>Sent a reminder</p>
						</div>
					</td>
				</tr>
				{activeTeams && (
					<tr className='bg-primary-content border-l-4 border-primary'>
						<td colSpan={3} className='px-4 py-2 lg:pl-20 lg:py-2 lg:hidden'>
							<TeamDetails teamId={teamId} />
						</td>
					</tr>
				)}
			</Fragment>
		);
	});

	return <Fragment>{renderedTeamLists}</Fragment>;
}
