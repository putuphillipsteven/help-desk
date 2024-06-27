'use client';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { useEffect, useState } from 'react';
import { Agents, AgentsProps } from '../../../../agents/data/agents';
import { agentLists } from '../../../../agents/data/dummyAgents';
import { AgentDetailsAvatar, CompanyAvatar, ProfileAvatar } from '../../../../components/avatar';
import PrioritySymbol from '../../../../tickets/components/ticket-lists/components/priority-symbol';
import AgentDetailsSkeleton from './agent-details-skeleton';
import IdURL from './id-url';

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
		return (
			<div className='flex flex-col gap-y-2'>
				<p className='text-xs text-primary-text'>Details</p>
				<p className='text-xs text-neutral'>Click agent name for details</p>
			</div>
		);
	}

	if (agent) {
		return (
			<div className='w-full h-full flex flex-col gap-y-4 md:flex pb-4'>
				<p className='text-xs'>Details</p>
				<div className='hidden lg:flex items-center w-full '>
					<AgentDetailsAvatar name={agent?.name} role={agent?.role} email={agent?.email} />
				</div>
				<div
					className='flex flex-col gap-y-2 h-[13em] overflow-auto no-scrollbar'
					onClick={() => setShowTeam(!showTeam)}
				>
					{agent?.tickets && (
						<div className='centering-flex gap-x-2 cursor-pointer'>
							{showTeam ? (
								<MdKeyboardArrowDown className='text-primary' />
							) : (
								<MdKeyboardArrowUp className='text-blue-dimata' />
							)}
							<p className='text-xs'>Tickets</p>
						</div>
					)}
					{agent?.tickets && agent?.tickets?.length > 0 ? (
						agent?.tickets?.map(
							(ticket, index) =>
								showTeam && (
									<div className='flex flex-col gap-y-2 border-b py-2 border-neutral' key={index}>
										<p className='text-xs'>{ticket?.requester}</p>
										<div className='centering-flex gap-x-4'>
											<PrioritySymbol priority={ticket?.priority} />
											<p className='text-xs'>{ticket?.subject}</p>
										</div>
									</div>
								),
						)
					) : (
						<p className='text-xs text-neutral-text'>Dont have any tickets</p>
					)}
				</div>
			</div>
		);
	}

	return null;
}
