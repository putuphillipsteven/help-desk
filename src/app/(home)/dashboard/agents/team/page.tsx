import MainTeam from '@/app/features/dashboard/agents/components/team/main-team';

export default async function Page({
	searchParams,
}: {
	searchParams: { page?: string; na?: string; ro?: string; teId?: string };
}) {
	const page = searchParams?.page || '';
	const name = searchParams?.na || '';
	const teamId = searchParams?.teId || '';

	return <MainTeam name={name} page={page} teamId={teamId} />;
}
