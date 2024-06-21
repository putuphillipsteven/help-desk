import MainTeam from '@/app/features/dashboard/agents/components/main-team';
import { teams } from '@/app/features/dashboard/agents/data/dummyTeams';
import { getTeams } from '@/app/features/dashboard/agents/hooks/useTeam';

export default async function Page() {
	const teamLists = await getTeams(teams);
	return <MainTeam teams={teamLists} />;
}
