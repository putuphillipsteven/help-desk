export default function AgentDetailsSkeleton() {
	return (
		<div className='w-full h-fit flex flex-col gap-y-0 lg:gap-y-4'>
			<div className='hidden lg:flex lg:flex-start gap-x-2 w-full'>
				<div className='hidden lg:flex avatar placeholder'>
					<div className='bg-neutral skeleton rounded-full  w-[4em] border-primary-content outline-none'></div>
				</div>
				<div className='hidden lg:flex flex-col gap-y-3 h-full'>
					<div className='skeleton h-[1.5em] w-[3em] bg-neutral'></div>
					<div className='skeleton h-2 w-16 bg-neutral'></div>
					<div className='skeleton h-2 w-12 bg-neutral'></div>
				</div>
			</div>
			<div className='flex flex-col gap-y-2 w-full'>
				<div className='centering-flex gap-x-2'>
					<div className='skeleton h-2 w-4 bg-neutral'></div>
					<div className='skeleton h-2 w-16 bg-neutral'></div>
				</div>
				<div className='hidden w-full h-fit centering-flex gap-x-4 p-0'>
					<div className='avatar placeholder'>
						<div className='bg-neutral skeleton rounded-md w-[2.5em] h-[2.5em]'></div>
					</div>
					<div className='flex flex-col gap-y-2'>
						<div className='skeleton h-2 w-12 bg-neutral'></div>
						<div className='skeleton h-2 w-12 bg-neutral'></div>
					</div>
				</div>
			</div>
		</div>
	);
}
