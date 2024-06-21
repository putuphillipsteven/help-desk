import { Fragment, Suspense } from 'react';
import clsx from 'clsx';
import ProfileAvatar from '../../components/avatar';
import AddNewAgentButton from './button';
import { Agents } from '../data/agents';
import { agentLists as dummyAgents } from '../data/dummyAgents';
import TableHeadSort from './table-head-sort';
import IdURL from './id-url';
import AgentDetails from './agent-details';
import AgentDetailsSkeleton from './agent-details-skeleton';

export default async function AgentList({
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
		return (
			<Fragment key={agent.id}>
				<tr
					className={clsx('h-fit cursor-pointer', {
						'bg-primary-content border-l-4 border-primary': String(agent?.id) === agentId,
					})}
				>
					<td className='centering-flex h-full px-4 py-2 lg:pl-20 lg:py-2'>
						<IdURL agentId={String(agent.id)}>
							<ProfileAvatar avatarType='profile' name={agent.name} email={agent.email} />
						</IdURL>
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
					<td colSpan={3} className='px-4 py-2 lg:pl-20 lg:py-2 lg:hidden'></td>
				</tr>
			</Fragment>
		);
	});
	return (
		<div className='w-full h-full flex overflow-auto md:overflow-hidden'>
			<div className='flex-1 h-full  flex flex-col overflow-y-hidden border-r border-neutral'>
				<table className='w-full h-fit'>
					<thead className='h-[3em] border-b border-neutral'>
						<TableHeadSort />
					</thead>
					<tbody>
						<tr className='h-[3em] w-full'>
							<td colSpan={3} className='w-full px-4 py-2 lg:pl-20'>
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
