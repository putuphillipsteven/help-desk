'use client';

import { RxTriangleDown } from 'react-icons/rx';
import NavLink from './components/nav-link';
import { TbLayoutGridAdd } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';
import { getInitials } from '@/app/lib/utils/naming/naming';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Fragment, useState } from 'react';
import clsx from 'clsx';
export default function SideNav() {
	const [sideNavDisplay, setSideNavDisplay] = useState(true);

	const toggleSideNav = () => {
		setSideNavDisplay(!sideNavDisplay);
	};

	return (
		<Fragment>
			<div>
				{!sideNavDisplay && (
					<div
						onClick={toggleSideNav}
						className={clsx(
							'w-8 h-8 centering-flex justify-center cursor-pointer bg-base-100 rounded-full drop-shadow-sm absolute -left-2 top-[50%] translate-y-2/4 z-20',
						)}
					>
						<MdOutlineKeyboardArrowRight className='text-2xl text-primary-text' />
					</div>
				)}
			</div>
			<div
				className={clsx(
					'w-full md:w-[240px] bg-base-100 h-screen p-[20px] flex flex-col justify-between drop-shadow-lg relative transition ease-out duration-300',
					{
						hidden: !sideNavDisplay,
					},
				)}
			>
				<div className='flex flex-col gap-y-6'>
					<Link className='centering-flex gap-x-4 w-full overflow-hidden' href={'/dashboard'}>
						<div className='rounded-md bg-primary'>
							<RxTriangleDown className='text-base-100 text-4xl' />
						</div>
						<h3>Helpdesk</h3>
					</Link>
					<div className='flex flex-col gap-y-2'>
						<NavLink
							destination='tickets'
							notification={1}
							label='Tickets'
							icon={<TbLayoutGridAdd className='text-base-300 text-2xl' />}
						/>
						<NavLink
							destination='agents/agent'
							notification={2}
							label='Agents'
							icon={<CgProfile className='text-base-300 text-2xl' />}
						/>
						{/* <NavLink /> */}
					</div>
				</div>
				<div className='flex flex-col gap-y-4'>
					<div className='flex flex-col gap-y-2'>
						{/* <NavLink />
					<NavLink />
					<NavLink /> */}
					</div>
					<div
						onClick={toggleSideNav}
						className='w-full bg-base-100 centering-flex cursor-pointer p-2 rounded-lg gap-x-4 drop-shadow-md'
					>
						<div className='w-8 h-8 centering-flex justify-center bg-base-100 rounded-full'>
							<MdOutlineKeyboardArrowLeft className='text-2xl text-primary-text' />
						</div>
						<p className='text-sm'>Collapse</p>
					</div>
					<div className='centering-flex gap-x-4 w-full '>
						{/* <div className='avatar'>
						<div className='w-10 rounded-full  border-2 border-light-gray-dimata3'>
							<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
						</div>
					</div> */}
						<div className='avatar placeholder'>
							<div className='bg-neutral text-neutral-content rounded-full w-12'>
								<span>{getInitials('User Name' || '')}</span>
							</div>
						</div>
						<div className='flex flex-col'>
							<p className='text-xs'>Username</p>
							<p className='text-xs'>email@email.com</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
