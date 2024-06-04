'use client';

import { BackButton } from '@/app/components/button';
import CreateTicketForm from './create-tickets-form';
export default function MainCreateTicket() {
	return (
		<div className='w-full h-full bg-white shadow-inner grid grid-rows-[3em_auto] overflow-y-auto no-scrollbar relative'>
			<div className='w-full h-full border-b p-4 flex items-center justify-between border-neutral relative'>
				<BackButton />
				<div className='absolute left-0 right-0 flex justify-center'>
					<p className='self-center'>Add New Ticket</p>
				</div>
			</div>
			<div className='w-full centering-flex-col px-4 pt-6 pb-10 flex flex-row'>
				<CreateTicketForm />
			</div>
		</div>
	);
}
