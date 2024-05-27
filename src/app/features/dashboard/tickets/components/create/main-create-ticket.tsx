'use client';

import { BackButton } from '@/app/components/button';
import CreateTicketForm from './create-tickets-form';
export default function MainCreateTicket() {
	return (
		<div className='w-full h-fit bg-white shadow-inner centering-flex-col gap-y-4 overflow-y-auto no-scrollbar'>
			<div className='w-full border-b pt-2 p-2 flex flex-row border-neutral'>
				<BackButton />
				<p className='self-center ml-auto mr-auto'>Add New Ticket</p>
			</div>
			<div className='w-[708px] pt-2 pb-10 flex flex-row'>
				<div className='opacity-0'>
					<BackButton />
				</div>
				<CreateTicketForm />
			</div>
		</div>
	);
}
