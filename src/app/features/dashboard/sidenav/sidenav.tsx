import { RxTriangleDown } from 'react-icons/rx';
import NavLink from './components/nav-link';
import { TbLayoutGridAdd } from 'react-icons/tb';
import Link from 'next/link';
export default function SideNav() {
	return (
		<div className='w-full h-full p-[20px] bg-white flex flex-col justify-between shadow'>
			<div className='flex flex-col gap-y-6'>
				<Link className='centering-flex gap-x-4 w-full overflow-hidden' href={'/dashboard'}>
					<div className='rounded-md bg-blue-dimata'>
						<RxTriangleDown className='text-white text-4xl' />
					</div>
					<h3>Helpdesk</h3>
				</Link>
				<div className='flex flex-col gap-y-2'>
					<NavLink
						destination='tickets'
						notification={1}
						label='Tickets'
						icon={<TbLayoutGridAdd className='text-2xl' />}
					/>
					<NavLink />
					<NavLink />
				</div>
			</div>
			<div className='flex flex-col gap-y-4'>
				<div className='flex flex-col gap-y-2'>
					<NavLink />
					<NavLink />
					<NavLink />
				</div>
				<div className='centering-flex gap-x-4 w-full '>
					<div className='avatar'>
						<div className='w-10 rounded-full  border-2 border-light-gray-dimata3'>
							<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
						</div>
					</div>
					<div className='flex flex-col'>
						<p className='text-xs'>Username</p>
						<p className='text-xs'>email@email.com</p>
					</div>
				</div>
			</div>
		</div>
	);
}
