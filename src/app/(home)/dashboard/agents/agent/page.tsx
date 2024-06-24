import MainAgent from '@/app/features/dashboard/agents/components/agents/main-agent';

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
			<MainAgent page={page} name={name} role={role} agentId={agentId} />
		</div>
	);
}
