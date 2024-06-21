'use client';

import { MdKeyboardArrowDown } from 'react-icons/md';
import ProfileAvatar from '../../components/avatar';
import { Agents, AgentsProps } from '../data/agents';
import { agentLists } from '../data/dummyAgents';
import AgentDetailsSkeleton from './agent-details-skeleton';
import { useEffect, useState } from 'react';

export default function AgentDetails({ agentId }: { agentId?: string }) {
	const agents = new Agents();
	const [agent, setAgent] = useState<AgentsProps>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchAgentDetails() {
			try {
				// Replace this with your actual data fetching logic
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
			<div className='w-full h-full flex flex-col gap-y-2 p-2 md:flex'>
				<div className='hagentIdden lg:flex items-center gap-x-2 w-full '>
					<ProfileAvatar avatarType='profile' name={agent?.name} email={agent?.name} />
				</div>
				<div className='flex flex-col gap-y-2'>
					<div
						className='centering-flex gap-y-2 cursor-pointer'
						// onClick={() => setShowTeams(!showTeams)}
					>
						<MdKeyboardArrowDown className='text-blue-dimata' />
						<p className='text-xs'>Teams</p>
					</div>
					{/* {showTeams && */}
					{agent?.teams?.map((team) => {
						return (
							<div className='centering-flex gap-x-2' key={team.name}>
								<ProfileAvatar avatarType='company' companyName={team.name} />
							</div>
						);
					})}
					{/* } */}
				</div>
			</div>
		);
	}
}
