import MainAgent from '@/app/features/dashboard/agents/components/main-agent';

export default function Layout({ children }: { children: React.ReactNode }) {
	return <MainAgent children={children} />;
}
