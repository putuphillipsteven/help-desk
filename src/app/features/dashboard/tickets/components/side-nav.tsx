import NewTicketButton from './new-ticket-button';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
export default function SideNavTickets() {
	return (
		<div className='w-full h-full flex flex-col shadow-inner'>
			<div className='centering-flex justify-between p-2 border-r-2 border-b-2 border-light-gray-dimata3'>
				<p className='font-medium'>Tickets</p>
				<NewTicketButton />
			</div>
			<div className='flex flex-col gap-y-4 h-full p-2 border-r-2 border-light-gray-dimata3'>
				<input
					type='text'
					className='input input-sm rounded-lg bg-light-gray-dimata2 text-light-gray-dimata3 placeholder:text-light-gray-dimata3 border-none focus:ring-0 focus:border-none focus:outline-0'
					placeholder='Search Ticket...'
				/>
				<p className='text-lg text-blue-dimata font-medium'>All Recent Tickets</p>
			</div>
		</div>
	);
}
