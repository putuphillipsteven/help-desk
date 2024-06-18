import MainAgent from '@/app/features/dashboard/agents/components/main-agent';
import { agents } from '@/app/features/dashboard/agents/data/dummyAgents';
import { getAgents } from '@/app/features/dashboard/agents/hooks/useAgent';

export default async function Layout({ children }: { children: React.ReactNode }) {
	const agentLists = await getAgents(agents);
	return <MainAgent agents={agentLists}>{children}</MainAgent>;
}
