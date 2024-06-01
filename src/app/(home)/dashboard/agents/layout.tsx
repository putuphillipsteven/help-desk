import MainAgents from '@/app/features/dashboard/agents/main-agents';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col w-full h-screen bg-white overflow-hidden overflow-y-auto no-scrollbar'>
			<MainAgents>{children}</MainAgents>
		</div>
	);
}
