interface DetailsMainProps {
	id: string;
}

export default function DetailsMain({ id }: DetailsMainProps) {
	return (
		<div className='flex gap-x-0 p-4 bg-white w-full h-full'>
			<div className='flex-1'>{id}</div>
			<div className='w-[240px]'>{id}</div>
		</div>
	);
}
