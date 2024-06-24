export default function TeamDetailsSkeleton() {
	return (
		<div className='w-full h-fit flex flex-col gap-y-2 p-2 md:flex'>
			<div className='w-full h-fit centering-flex gap-x-4'>
				<div className='avatar placeholder'>
					<div className='bg-neutral skeleton rounded-md w-8 h-8'></div>
				</div>
				<div className='flex flex-col gap-y-2'>
					<div className='skeleton h-2 w-36 bg-neutral'></div>
					<div className='skeleton h-2 w-24 bg-neutral'></div>
				</div>
			</div>
		</div>
	);
}
