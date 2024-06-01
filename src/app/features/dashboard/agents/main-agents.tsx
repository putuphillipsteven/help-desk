'use client';

import React, { Fragment } from 'react';
import Alert from '../sidenav/components/alert';
import clsx from 'clsx';
import { checkLinkAgents } from '@/app/lib/utils/routing/routing';
import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';
import { TbEdit } from 'react-icons/tb';
import { usePathname } from 'next/navigation';

interface MainAgentsProps {
	children: React.ReactNode;
}

export default function MainAgents({ children }: MainAgentsProps) {
	const pathname = usePathname();

	return (
		<div className='w-full h-full'>
			<Alert msg='Set up email forwarding to see new customer messages on your dashboard.' />
			<div className='w-full h-full flex flex-col overflow-y-auto no-scrollbar'>
				<div className='w-full h-full flex flex-col'>
					<div className='w-full h-12 centering-flex justify-between border-b  border-neutral'>
						<div className='w-full bg-white flex-1 h-full px-2 centering-flex justify-between border-r border-neutral'>
							<div className='w-full h-12 centering-flex gap-x-2'>
								<div
									className={clsx('h-full centering-flex px-4', {
										'border-b-2 border-primary ': checkLinkAgents('agent' || 'undefined', pathname),
									})}
								>
									<Link
										href={'/dashboard/agents/agent?na=asc'}
										className='text-primary-text text-lg font-medium'
									>
										Agent(3)
									</Link>
								</div>
								<div
									className={clsx('h-full centering-flex px-4', {
										'border-b-2 border-primary': checkLinkAgents('team' || 'undefined', pathname),
									})}
								>
									<Link
										href={'/dashboard/agents/team?na=asc'}
										className='text-primary-text text-lg font-medium'
									>
										Team(3)
									</Link>
								</div>
							</div>
							<div className='centering-flex h-full'>
								<IoIosSearch className='text-2xl text-primary' />
							</div>
						</div>
						<div className='w-[240px] overflow-hidden hidden xl:flex'>
							<div className='w-full h-12 centering-flex justify-between p-2 border-neutral gap-x-2'>
								<p>Details</p>
								<TbEdit className='text-2xl text-primary' />
							</div>
						</div>
					</div>
					<div className='h-full'>{children}</div>
				</div>
			</div>
		</div>
	);
}
