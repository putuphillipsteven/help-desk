import { CreateButton } from '@/app/components/button';
import { filters } from '../../data/filters';
export default function SideNavTickets() {
	const renderedFilters = filters?.map((filter, index) => {
		return (
			<div key={index} className='w-full flex flex-col gap-y-2'>
				<p className='text-sm text-blue-dimata'>{filter.name}</p>
				{filter.children?.map((child, index) => {
					return (
						<div key={index} className='centering-flex justify-between cursor-pointer'>
							<p className='text-sm hover:font-bold'>{child?.name}</p>
							<div className='bg-light-gray-dimata2 p-1 rounded-xl'>
								<p className='text-sm'>{child?.notification}</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	});
	return (
		<div className='w-full h-full bg-white flex flex-col shadow-inner'>
			<div className='h-12 centering-flex justify-between p-2 border-r border-b border-light-gray-dimata-5'>
				<p className='font-medium'>Tickets</p>
				<CreateButton label='New Tickets' variant='filled' href='/dashboard/tickets/create' />
			</div>
			<div className='flex flex-col gap-y-4 h-full p-2 border-r border-light-gray-dimata-5'>
				<input
					type='text'
					className='input input-sm rounded-lg bg-light-gray-dimata2 text-black-dimata placeholder:text-light-gray-dimata3 border-none focus:ring-0 focus:border-none focus:outline-0'
					placeholder='Search Ticket...'
				/>
				<div className='flex flex-col gap-y-4'>{renderedFilters}</div>
			</div>
		</div>
	);
}
