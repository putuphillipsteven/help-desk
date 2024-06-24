'use client';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { Teams, TeamsProps } from '../../data/teams';
import { teamLists } from '../../data/dummyTeams';
import { CompanyAvatar, ProfileAvatar } from '../../../components/avatar';
import TeamDetailsSkeleton from './team-details-skeleton';

interface TeamDetailProps {
	teamId: string;
}

export default function TeamDetails({ teamId }: TeamDetailProps) {
	const teams = new Teams();
	const [team, setTeam] = useState<TeamsProps>();
	const [loading, setLoading] = useState(false);
	const [showAgents, setShowAgents] = useState(true); // State variable to toggle visibility

	useEffect(() => {
		async function fetchAgentDetails() {
			try {
				setLoading(true);
				const response = await teams.getTeamDetails(teamLists, String(teamId));
				setTeam(response);
			} catch (error) {
				console.error('Error fetching agent details:', error);
			} finally {
				setLoading(false);
			}
		}

		if (teamId) {
			fetchAgentDetails();
		}
	}, [teamId]);

	if (loading) {
		return <TeamDetailsSkeleton />;
	}

	if (!teamId) {
		return <p className='text-xs text-neutral'>Click team for details</p>;
	}

	return (
		<div className='w-full h-full flex flex-col gap-y-4 md:flex'>
			<div className='hidden lg:flex items-center gap-x-2 w-full '>
				<CompanyAvatar
					numberOfAgents={String(team?.members?.length)}
					teamName={team?.name || ''}
					key={team?.name}
				/>
			</div>
			<div className='flex flex-col gap-y-4'>
				<div
					className='centering-flex gap-x-2 cursor-pointer'
					onClick={() => setShowAgents(!showAgents)}
				>
					{showAgents ? (
						<MdKeyboardArrowDown className='text-neutral' />
					) : (
						<MdKeyboardArrowUp className='text-neutral' />
					)}
					<p className='text-xs'>Members</p>
				</div>
				<div className='flex flex-col gap-y-4'>
					{showAgents &&
						team?.members?.map((member) => {
							return <ProfileAvatar key={member.name} name={member.name} email={member.role} />;
						})}
				</div>
			</div>
		</div>
	);
}
