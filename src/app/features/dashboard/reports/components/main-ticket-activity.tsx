'use client';

import TicketActicityInputs from './ticket-activity/ticket-activity-inputs';
import TADisplayDate from './ticket-activity/t-a-display-date';

export default function MainTicketActivity() {
	return (
		<div className='w-full h-full flex flex-col shadow-lg p-2 rounded-md'>
			<div className='header-reports w-full h-[3em] flex justify-between'>
				<div className='centering-flex px-2'>
					<p>Ticket Activity</p>
				</div>
				<div className='centering-flex h-full p-2 gap-x-2 w-fit'>
					<TADisplayDate />
					<TicketActicityInputs />
				</div>
			</div>

			<div className='body-ticket-activity flex-1 w-full'>
				<p>Body</p>
			</div>
		</div>
	);
}
