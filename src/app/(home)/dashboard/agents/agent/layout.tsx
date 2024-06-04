import MainAgent from '@/app/features/dashboard/agents/components/main-agent';
import { agents } from '@/app/features/dashboard/agents/data/agents';
import { getAgents } from '@/app/features/dashboard/agents/hooks/useAgent';
import { TicketListsSkeleton } from '@/app/features/dashboard/tickets/components/ticket-list-skeleton';
import { Suspense } from 'react';

export default async function Layout({ children }: { children: React.ReactNode }) {
	const agentLists = await getAgents(agents);
	return (
		<Suspense fallback={<TicketListsSkeleton />}>
			<MainAgent agents={agentLists}>{children}</MainAgent>
		</Suspense>
	);
}
