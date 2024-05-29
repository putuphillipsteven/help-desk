import MainAgents from '@/app/features/dashboard/agents/main-agents';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col w-full h-full bg-white overflow-hidden overflow-y-auto no-scrollbar'>
			<MainAgents>{children}</MainAgents>
		</div>
	);
}
