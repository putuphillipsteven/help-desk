import MainTeam from '@/app/features/dashboard/agents/components/team/main-team';
import MainTeamSkeleton from '@/app/features/dashboard/agents/components/team/main-team-skeleton';
import { Suspense } from 'react';

export default async function Page({
	searchParams,
}: {
	searchParams: { page?: string; na?: string; ro?: string; teId?: string };
}) {
	const page = searchParams?.page || '';
	const name = searchParams?.na || '';
	const teamId = searchParams?.teId || '';

	return (
		<Suspense fallback={<MainTeamSkeleton />}>
			<MainTeam name={name} page={page} teamId={teamId} />;
		</Suspense>
	);
}
