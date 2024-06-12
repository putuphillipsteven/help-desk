export default function Page({ params }: { params: { id: number } }) {
	const agentDetails = params.id;
	return <div>{agentDetails}</div>;
}
