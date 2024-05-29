import MainTeam from '@/app/features/dashboard/agents/components/main-team';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Suspense>
			<MainTeam>{children}</MainTeam>
		</Suspense>
	);
}
