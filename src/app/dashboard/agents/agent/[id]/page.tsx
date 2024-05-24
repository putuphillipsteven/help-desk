export default function Page({ params }: { params: { id: string } }) {
	return (
		<div className='p-2'>
			<p className='text-lg'>Agent Details</p>
			<p className='text-lg'>{params.id}</p>
		</div>
	);
}
