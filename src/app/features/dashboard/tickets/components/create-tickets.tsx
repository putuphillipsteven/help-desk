'use client';

import { AddButton, BackButton } from '@/app/components/button';
import CustomQuill from '@/app/components/custom-quill';
import CreateTicketForm from './create-tickets-form';
export default function CreateTicket() {
	return (
		<div className='w-full h-fit bg-white shadow-inner centering-flex-col gap-y-4 overflow-y-auto no-scrollbar'>
			<div className='w-full border-b-2 pt-2 p-2 flex flex-row border-light-gray-dimata3'>
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
