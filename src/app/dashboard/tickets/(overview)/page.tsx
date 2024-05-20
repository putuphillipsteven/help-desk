import CreateButton from '@/app/components/button';
import Main from '@/app/features/dashboard/tickets/components/main';
import NewTicketButton from '@/app/features/dashboard/tickets/components/new-ticket-button';

export default function Page() {
	return (
		<div className='w-full h-full flex flex-col shadow-inner bg-white'>
			<Main />
		</div>
	);
}
