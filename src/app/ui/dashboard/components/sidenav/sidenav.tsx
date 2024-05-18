import { RxTriangleDown } from 'react-icons/rx';

export default function SideNav() {
	return (
		<div className='w-[238px] p-[20px] h-full bg-white'>
			<div className='centering-flex gap-x-4'>
				<div className='rounded-md bg-blue-dimata'>
					<RxTriangleDown className='text-white text-4xl' />
				</div>
				<h3>Helpdesk</h3>
			</div>
		</div>
	);
}
