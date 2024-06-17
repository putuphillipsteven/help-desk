import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import ProfileAvatar from '../components/avatar';
import { tickets } from './data/tickets';
import { getTickets } from './hooks/useTickets';

interface User {
	username: string;
	email: string;
}

interface TicketItemProps {
	id: number | undefined;
	subject: string | undefined;
	createdAt: string | undefined;
	user: User | undefined;
	team: string | undefined;
	agent: string | 'unassigned' | undefined;
	priority: string | undefined;
	status: string | undefined;
	details: string | undefined;
}

interface TicketProps {
	filter?: {
		assignee: string | 'all';
		status: string | 'open';
		requester?: string | '';
		folder?: string | '';
		startDate?: string | '';
		endDate?: string | '';
	};
	router: AppRouterInstance;
}

// const _ticketLists: WeakMap<object, TicketItemProps[]> = new WeakMap<object, TicketItemProps[]>();

export class Ticket {
	router: AppRouterInstance;
	constructor({ router }: TicketProps) {
		this.router = router;
		// _ticketLists.set(this, []);
	}

	async renderTicketLists() {
		const ticketsData = await getTickets(tickets);
		return ticketsData.map((ticket) => (
			<tr key={ticket.id}>
				<td className='p-2'>
					<input
						type='checkbox'
						className='checkbox checkbox-xs border border-neutral checked:border-primary [--chkbg:theme(colors.primary)] [--chkfg:white] rounded-sm'
					/>
				</td>
				<td className='p-2'>
					<div
						className='centering-flex gap-x-2 w-full cursor-pointer'
						onClick={() => {
							this.router.push(`tickets/details/${ticket.id}`);
						}}
					>
						<ProfileAvatar
							avatarType='profile'
							name={ticket.user?.username}
							email={ticket.user?.email}
						/>
					</div>
				</td>
				<td
					className='cursor-pointer p-2'
					onClick={() => {
						this.router.push(`tickets/details/${ticket.id}`);
					}}
				>
					<p className='text-sm w-full line-clamp-2'>{ticket.subject}</p>
				</td>
				<td className='p-2'>
					<p className='text-sm line-clamp-2'>{ticket.agent}</p>
				</td>
				<td className='p-2'>
					<div className='badge bg-primary border-transparent gap-2 text-base-100'>
						{ticket.status}
					</div>
				</td>
				<td className='p-2'>
					<p className='text-sm line-clamp-2'>Last 5 minutes</p>
				</td>
			</tr>
		));
	}
}
