import MainAgent from '@/app/features/dashboard/agents/components/main-agent';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Suspense>
			<MainAgent>{children}</MainAgent>
		</Suspense>
	);
}
