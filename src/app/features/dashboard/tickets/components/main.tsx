import CreateButton from '@/app/components/button';
import { Fragment } from 'react';
import { tickets } from '../data/tickets';

export default function Main() {
	const renderedTickets = tickets?.map((ticket, index) => {
		return (
			<tr key={index}>
				<td className=''>
					<input
						type='checkbox'
						className='checkbox checkbox-sm border-2  checked:border-blue-dimata [--chkbg:theme(colors.blue-dimata)] [--chkfg:white] rounded-sm'
					/>
				</td>
				<td>
					<div className='centering-flex gap-x-2 w-full '>
						<div className='avatar'>
							<div className='w-10 rounded-full  border-2 border-light-gray-dimata3'>
								<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
							</div>
						</div>
						<div className='flex flex-col'>
							<p className='text-xs'>{ticket.user.username}</p>
							<p className='text-xs'>{ticket.user.email}</p>
						</div>
					</div>
				</td>
				<td>
					<p className='text-sm'>{ticket.subject}</p>
				</td>
				<td>
					<p className='text-sm'>{ticket.agent}</p>
				</td>
				<td>
					<div className='badge bg-blue-dimata-2 border-transparent gap-2 text-white'>
						{ticket.status}
					</div>
				</td>
				<td>
					<p className='text-sm'>Last 5 minutes</p>
				</td>
			</tr>
		);
	});
	return (
		<Fragment>
			<div className='h-12 centering-flex justify-between p-2 border-b-2 border-light-gray-dimata3'>
				<p className='font-medium'>All Recent Tickets</p>
			</div>
			<div className='p-2 border-b-2 border-light-gray-dimata3'>
				<CreateButton label='Add Filter' variant='outline' />
			</div>
			<div className='p-2'>
				<table className='w-full text-black-dimata border-separate'>
					<thead className=''>
						<tr className='text-sm text-left uppercase h-8'>
							<th className='font-medium'>
								<input
									type='checkbox'
									className='checkbox checkbox-sm border-2  checked:border-blue-dimata [--chkbg:theme(colors.blue-dimata)] [--chkfg:white] rounded-sm'
								/>
							</th>
							<th className='font-medium'>Requester</th>
							<th className='font-medium'>Subject</th>
							<th className='font-medium'>Agent</th>
							<th className='font-medium'>Status</th>
							<th className='font-medium'>Last Message</th>
						</tr>
					</thead>
					<tbody className=''>{renderedTickets}</tbody>
				</table>
			</div>
		</Fragment>
	);
}
