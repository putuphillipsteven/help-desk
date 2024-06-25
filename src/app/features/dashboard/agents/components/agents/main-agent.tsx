import { Fragment, Suspense } from 'react';
import clsx from 'clsx';
import AgentDetails from './agent-details';
import AgentDetailsSkeleton from './agent-details-skeleton';
import { Agents } from '../../data/agents';
import { AgentIdURL } from '../id-url';
import TableHeadSort from '../table-head-sort';
import AddNewAgentButton from '../button';
import { agentLists as dummyAgents } from '../../data/dummyAgents';
import { ProfileAvatar } from '../../../components/avatar';

export default async function MainAgent({
	page,
	name,
	role,
	agentId,
}: {
	page: string;
	name: string;
	role: string;
	agentId: string;
}) {
	const agents = new Agents();
	const agentLists = await agents.getAgents(dummyAgents);
	const renderedAgents = agentLists?.map((agent) => {
		const activeAgents = +agentId === agent?.id;
		return (
			<Fragment key={agent.id}>
				<tr
					className={clsx('cursor-pointer h-[4em]', {
						'bg-primary-content border-l-4 border-primary': String(agent?.id) === agentId,
					})}
				>
					<td className='centering-flex h-full px-4 w-fit lg:pl-16'>
						<AgentIdURL agentId={String(agent.id)}>
							<ProfileAvatar name={agent.name} email={agent.email} />
						</AgentIdURL>
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
				<tr>
					{activeAgents && (
						<td
							colSpan={3}
							className={clsx('px-4 pt-0 pb-2 lg:pl-20  lg:hidden', {
								'bg-primary-content border-l-4 border-primary': String(agent?.id) === agentId,
							})}
						>
							<AgentDetails agentId={agentId} />
						</td>
					)}
				</tr>
			</Fragment>
		);
	});
	return (
		<div className='w-full h-full flex overflow-auto md:overflow-hidden'>
			<div className='flex-1 h-full  flex flex-col overflow-y-hidden border-r border-neutral'>
				<table className='w-full h-fit'>
					<thead className='h-[3em] border-b border-neutral'>
						<TableHeadSort uses='agent' />
					</thead>
					<tbody className='w-full'>
						<tr className='h-[3em] w-full'>
							<td colSpan={3} className='w-full px-4 py-2 lg:pl-16'>
								<div className='w-full'>
									<AddNewAgentButton />
								</div>
							</td>
						</tr>
						{renderedAgents}
					</tbody>
				</table>
			</div>
			<div className='w-[240px] h-full overflow-hidden hidden lg:flex p-2'>
				<Suspense fallback={<AgentDetailsSkeleton />}>
					<AgentDetails agentId={agentId} />
				</Suspense>
			</div>
		</div>
	);
}