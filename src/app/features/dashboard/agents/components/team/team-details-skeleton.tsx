export default function TeamDetailsSkeleton() {
	return (
		<div className='w-full h-fit flex flex-col gap-y-4 md:flex'>
			<div className='hidden w-full h-fit centering-flex gap-x-4'>
				<div className='avatar placeholder'>
					<div className='bg-neutral skeleton rounded-md w-[2.5em] h-[2.5em]'></div>
				</div>
				<div className='flex flex-col gap-y-2'>
					<div className='skeleton h-2 w-16 bg-neutral'></div>
					<div className='skeleton h-2 w-12 bg-neutral'></div>
				</div>
			</div>
			<div className='centering-flex gap-x-2'>
				<div className='skeleton h-2 w-4 bg-neutral'></div>
				<div className='skeleton h-2 w-12 bg-neutral'></div>
			</div>
			<div className='w-full h-fit centering-flex gap-x-4'>
				<div className='avatar placeholder'>
					<div className='bg-neutral skeleton rounded-full w-[2.5em] h-[2.5em]'></div>
				</div>
				<div className='flex flex-col gap-y-2'>
					<div className='skeleton h-2 w-16 bg-neutral'></div>
					<div className='skeleton h-2 w-12 bg-neutral'></div>
				</div>
			</div>
		</div>
	);
}
