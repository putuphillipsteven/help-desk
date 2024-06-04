'use client';

import { RxTriangleDown } from 'react-icons/rx';
import NavLink from './components/nav-link';
import { TbLayoutGridAdd } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';
import { getInitials } from '@/app/lib/utils/naming/naming';
import { Fragment, useState } from 'react';
import clsx from 'clsx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineShowChart } from 'react-icons/md';

export default function SideNav() {
	const [sideNavDisplay, setSideNavDisplay] = useState(true);

	const toggleSideNav = () => {
		setSideNavDisplay(!sideNavDisplay);
	};

	return (
		<Fragment>
			<div
				className={clsx(
					'bg-base-100 h-screen flex flex-col justify-between drop-shadow-lg relative transition ease-out duration-300 overflow-hidden',
					{
						'w-[4em] px-[8px] py-[20px] centering-flex-col': !sideNavDisplay,
						'md:w-[240px] p-[20px]': sideNavDisplay,
					},
				)}
			>
				<div className='flex flex-col gap-y-6'>
					<Link className={'centering-flex gap-x-4 w-fit overflow-hidden'} href={'/dashboard'}>
						<div className='rounded-md bg-primary'>
							<RxTriangleDown className='text-base-100 text-4xl' />
						</div>
						<h3 className={clsx('', { hidden: !sideNavDisplay })}>Helpdesk</h3>
					</Link>
					<div className='flex flex-col gap-y-2'>
						<div
							className={clsx(
								'w-fit centering-flex justify-start p-2 rounded-md hover:cursor-pointer',
							)}
							onClick={toggleSideNav}
						>
							<GiHamburgerMenu className='text-2xl text-primary-text' />
						</div>
						<NavLink
							sideNavDisplay={sideNavDisplay}
							destination='tickets'
							notification={1}
							label='Tickets'
							icon={<TbLayoutGridAdd className='text-base-300 text-2xl' />}
						/>
						<NavLink
							sideNavDisplay={sideNavDisplay}
							destination='agents/agent'
							notification={2}
							label='Agents'
							icon={<CgProfile className='text-base-300 text-2xl' />}
						/>
						<NavLink
							sideNavDisplay={sideNavDisplay}
							destination='#'
							notification={2}
							label='Reports'
							icon={<MdOutlineShowChart className='text-base-300 text-2xl' />}
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
						<div className={clsx('flex flex-col', { hidden: !sideNavDisplay })}>
							<p className='text-xs'>Username</p>
							<p className='text-xs'>email@email.com</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
