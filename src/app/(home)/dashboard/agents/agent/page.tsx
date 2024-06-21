import AgentList from '@/app/features/dashboard/agents/components/agent-list';

export default async function Page({
	searchParams,
}: {
	searchParams: { page?: string; na?: string; ro?: string; agId?: string };
}) {
	const page = searchParams?.page || '';
	const name = searchParams?.na || '';
	const role = searchParams?.ro || '';
	const agentId = searchParams?.agId || '';

	return (
		<div className='w-full h-full flex bg-base-100'>
			<div className='flex-1 h-full  flex flex-col overflow-y-hidden'>
				<div className='w-full h-full overflow-auto md:overflow-hidden border-r border-neutral'>
					<AgentList page={page} name={name} role={role} agentId={agentId} />
				</div>
			</div>
			<div className='w-[240px] h-full overflow-hidden hidden lg:flex p-2'>
				<p className='text-neutral text-xs'>Click agent name for details</p>
			</div>
		</div>
	);
}
