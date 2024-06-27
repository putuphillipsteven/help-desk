import InputSkeleton from './input-skeleton';

export default function TicketActivitySkeleton() {
	return (
		<div className='w-full h-full flex flex-col shadow-lg p-2 rounded-md'>
			<div className='header-reports w-full h-[3em] flex justify-between'>
				<div className='centering-flex px-2'>
					<p className='skeleton h-10 w-36 bg-neutral'></p>
				</div>
				<div className='centering-flex p-2 gap-x-2 w-fit'>
					<InputSkeleton />
				</div>
			</div>
			<div className='body-ticket-activity flex-1 w-full flex items-end justify-between px-8'>
				{Array(5)
					.fill('')
					.map((_, index) => (
						<div className='h-40 w-16 skeleton bg-neutral' key={index}></div>
					))}
			</div>
			<div className='centering-flex justify-between w-full px-16 py-2'>
				{Array(5)
					.fill('')
					.map((_, index) => (
						<div className='centering-flex gap-x-2' key={index}>
							<div className='skeleton w-6 h-6 rounded-full centering-flex-col justify-center bg-neutral text-white text-xs'></div>
							<div className='skeleton w-16 h-3 bg-neutral'></div>
						</div>
					))}
			</div>
		</div>
	);
}
