'use client';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import AgentDetailsSkeleton from './agent-details-skeleton';
import { useEffect, useState } from 'react';
import { Agents, AgentsProps } from '../../data/agents';
import { agentLists } from '../../data/dummyAgents';
import { CompanyAvatar, ProfileAvatar } from '../../../components/avatar';
import TeamDetailsSkeleton from '../team/team-details-skeleton';

export default function AgentDetails({ agentId }: { agentId?: string }) {
	const agents = new Agents();
	const [agent, setAgent] = useState<AgentsProps>();
	const [showTeam, setShowTeam] = useState(true);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchAgentDetails() {
			try {
				setLoading(true);
				const response = await agents.getAgentDetails(agentLists, String(agentId));
				setAgent(response);
			} catch (error) {
				console.error('Error fetching agent details:', error);
			} finally {
				setLoading(false);
			}
		}

		if (agentId) {
			fetchAgentDetails();
		}
	}, [agentId]);

	if (loading) {
		return <AgentDetailsSkeleton />;
	}

	if (!agentId) {
		return <p className='text-xs text-neutral'>Click agent name for details</p>;
	}

	if (agent) {
		return (
			<div className='w-full h-full flex flex-col gap-y-4 md:flex'>
				<div className='hidden lg:flex items-center w-full '>
					<ProfileAvatar name={agent?.name} email={agent?.email} />
				</div>
				<div className='flex flex-col gap-y-4' onClick={() => setShowTeam(!showTeam)}>
					{agent?.teams && (
						<div className='centering-flex gap-x-2 cursor-pointer'>
							{showTeam ? (
								<MdKeyboardArrowDown className='text-blue-dimata' />
							) : (
								<MdKeyboardArrowUp className='text-blue-dimata' />
							)}
							<p className='text-xs'>Teams</p>
						</div>
					)}
					{agent?.teams && agent?.teams?.length > 0 ? (
						agent?.teams?.map(
							(team) =>
								showTeam && (
									<div className='centering-flex gap-x-2' key={team.name}>
										<CompanyAvatar teamName={team.name} numberOfAgents={''} />
									</div>
								),
						)
					) : (
						<p className='text-xs text-neutral-text'>Not on any team</p>
					)}
				</div>
			</div>
		);
	}

	return null;
}
