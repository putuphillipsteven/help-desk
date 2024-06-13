import AgentsSkeleton from '@/app/features/dashboard/agents/components/agents-skeleton';
import MainAgents from '@/app/features/dashboard/agents/main-agents';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col w-full h-screen bg-white overflow-hidden overflow-y-auto no-scrollbar'>
			<MainAgents>
				<Suspense fallback={<AgentsSkeleton />}>{children}</Suspense>
			</MainAgents>
		</div>
	);
}
