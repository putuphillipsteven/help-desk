export default function AgentDetailsSkeleton() {
	return (
		<div className='w-full h-fit flex flex-col gap-y-0 lg:gap-y-4'>
			<p className='text-xs'>Details</p>
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
				<div className='w-full h-fit flex flex-col gap-y-6 p-0'>
					<div className='centering-flex gap-x-2'>
						<div className='skeleton h-2 w-4 bg-neutral'></div>
						<div className='skeleton h-2 w-12 bg-neutral'></div>
					</div>
					{Array(1)
						.fill('')
						.map((_, index) => {
							return (
								<div className='w-full flex flex-col gap-y-4' key={index}>
									<div className='skeleton h-3 w-8 bg-neutral'></div>
									<div className='centering-flex gap-x-2'>
										<div className='skeleton h-3 w-4 bg-neutral'></div>
										<div className='skeleton h-3 w-24 bg-neutral'></div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
