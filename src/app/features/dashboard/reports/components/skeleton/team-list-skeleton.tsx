export default function TeamListSkeleton() {
	return Array(3)
		.fill('')
		.map((_, index) => {
			return (
				<div className='centering-flex gap-x-4 -mb-4' key={index}>
					<div className='centering-flex gap-x-2 py-4 px-2'>
						<div className='w-10 h-10 skeleton bg-neutral rounded-md'></div>
						<div className='flex flex-col gap-y-2'>
							<div className='w-14 h-2 skeleton bg-neutral'></div>
							<div className='w-10 h-2 skeleton bg-neutral'></div>
						</div>
					</div>
					<div className='w-16 h-2 skeleton bg-neutral'></div>
				</div>
			);
		});
}
