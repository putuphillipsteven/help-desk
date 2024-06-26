import { Suspense } from 'react';
import AgentDetails from './agent-activity/agent-details/agent-details';
import AgentList from './agent-activity/agent-list/agent-list';
import AgAcDateFilter from './agent-activity/date-filter/ag-ac-date-filter';
import AgAStatusFilter from './agent-activity/status-filter/ag-a-status-filter';
import AgentListSkeleton from './agent-activity/agent-list/agent-list-skeleton';

export default async function MainAgentActivity({ agid }: { agid: string }) {
	return (
		<div className='w-full h-full flex flex-col gap-y-4 shadow-lg rounded-md'>
			<div className='header-reports w-full h-[3em] flex justify-between px-2'>
				<div className='centering-flex px-2'>
					<p className='text-xl font-medium'>Agent Activity</p>
				</div>
				<div className='centering-flex h-full p-2 gap-x-2 w-fit'>
					<AgAcDateFilter />
				</div>
			</div>
			<div className='body-team-activity flex-1 flex flex-col h-full w-full gap-y-2'>
				<AgAStatusFilter />
				<div className='w-full h-full flex px-2'>
					<div className='flex-1 '>
						<Suspense fallback={<AgentListSkeleton />}>
							<AgentList />
						</Suspense>
					</div>
					<div className='w-[30em] border-l border-neutral px-2'>
						<Suspense fallback={<p className='text-xs text-primary-text'>Details</p>}>
							<AgentDetails agentId={agid} />
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	);
}
