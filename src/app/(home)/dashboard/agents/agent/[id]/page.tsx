import AgentDetails from '@/app/features/dashboard/agents/components/agent-details';

export default function Page({ params }: { params: { id: string } }) {
	return (
		<div>
			<AgentDetails id={params.id} />
		</div>
	);
}
