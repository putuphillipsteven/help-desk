import { Agents } from '../../../../agents/data/agents';
import { agentLists as dummyAgents } from '../../../../agents/data/dummyAgents';
import { ProfileAvatar } from '../../../../components/avatar';
import IdURL from '../agent-details/id-url';

export default async function AgentList() {
	const agent = new Agents();
	const agentLists = await agent?.getAgents(dummyAgents);
	const renderedAgentLists = agentLists?.map((agent) => {
		return (
			<tr key={agent?.name}>
				<td className='py-3'>
					<IdURL agId={String(agent.id)}>
						<ProfileAvatar email={agent?.email} name={agent?.name} />
					</IdURL>
				</td>
				<td className='text-center text-xs text-primary-text'>3</td>
			</tr>
		);
	});
	return (
		<div className='w-full flex flex-col gap-y-2 h-[20em] overflow-auto no-scrollbar'>
			<div className='w-full flex gap-x-4'>
				<table className='w-full border-collapse relative'>
					<thead className='text-left text-primary-text text-xs sticky top-0 bg-white z-10'>
						<tr>
							<th className='pb-4 font-normal'>Name</th> {/* Add padding-bottom to create space */}
							<th className='w-[1%] whitespace-nowrap pr-2 pb-4 font-normal'>
								Amount of Tickets Open
							</th>
						</tr>
					</thead>
					<tbody className=''>{renderedAgentLists}</tbody>
				</table>
			</div>
		</div>
	);
}
