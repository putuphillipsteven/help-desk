import { FiPlusCircle } from 'react-icons/fi';

export default function NewTicketButton() {
	return (
		<button className='btn btn-sm bg-blue-dimata border-none centering-flex justify-between text-white'>
			<FiPlusCircle className='text-lg' />
			New Ticket
		</button>
	);
}
