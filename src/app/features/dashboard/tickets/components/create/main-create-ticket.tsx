'use client';

import { BackButton } from '@/app/components/button';
import CreateTicketForm from './create-tickets-form';
export default function MainCreateTicket() {
	return (
		<div className='w-full h-full bg-white shadow-inner grid grid-rows-[3em_auto] overflow-y-auto no-scrollbar relative'>
			<div className='w-full h-full border-b p-4 centering-flex justify-between border-neutral'>
				<BackButton />
				<p className='lg:absolute  lg:left-[50%]'>Add New Ticket</p>
			</div>
			<div className='w-full centering-flex-col px-4 pt-2 pb-10 flex flex-row'>
				<CreateTicketForm />
			</div>
		</div>
	);
}
