import AgentDetails from '@/app/features/dashboard/agents/components/agent-details';
import TeamDetails from '@/app/features/dashboard/agents/components/team-details';

export default function Page({ params }: { params: { id: string } }) {
	return (
		<div>
			<TeamDetails id={params.id} />
		</div>
	);
}
