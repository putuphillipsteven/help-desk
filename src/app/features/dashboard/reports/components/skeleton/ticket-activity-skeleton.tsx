import TADisplayDate from '../ticket-activity/t-a-display-date';
import TicketActicityInputs from '../ticket-activity/ticket-activity-inputs';

export default function TicketActivitySkeleton() {
	return (
		<div className='w-full h-full flex flex-col shadow-lg p-2 rounded-md'>
			<div className='header-reports w-full h-[3em] flex justify-between'>
				<div className='centering-flex px-2'>
					<p className='font-medium text-xl'>Ticket Activity</p>
				</div>
				<div className='centering-flex p-2 gap-x-2 w-fit'>
					<TADisplayDate />
					<TicketActicityInputs />
				</div>
			</div>
			<div className='body-ticket-activity relative flex-1 w-full flex items-end justify-between px-8 overflow-hidden'>
				<div className='flex w-full h-full flex-col justify-between absolute pr-[5em]'>
					<div className='w-full border border-base-200'></div>
					<div className='w-full border border-base-200'></div>
					<div className='w-full border border-base-200'></div>
					<div className='w-full border border-base-200'></div>
					<div className='w-full border border-base-200'></div>
					<div className='w-full border border-base-200'></div>
					<div className='w-full border border-base-200'></div>
					<div className='w-full border border-base-200'></div>
					<div className='w-full border border-base-200'></div>
					<div className='w-full border border-base-200'></div>
					<div className='w-full border border-base-200'></div>
				</div>
				{Array(5)
					.fill('')
					.map((_, index) => (
						<div
							className='h-40 w-16 skeleton bg-neutral z-20 rounded-none border border-gray-300'
							key={index}
						></div>
					))}
			</div>
			<div className='centering-flex justify-between w-full px-16 gap-x-2 py-2'>
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
