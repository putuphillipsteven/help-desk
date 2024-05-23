import MainAgent from '@/app/features/dashboard/agents/components/main-agent';

export default function Page({ params }: { params: { id: string } }) {
	return <MainAgent id={params.id} />;
}
