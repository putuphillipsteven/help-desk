'use client';

import Alert from '@/app/features/dashboard/sidenav/components/alert';
import { checkLink, checkLinkAgents } from '@/app/lib/utils/routing/routing';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	return (
		<div className='flex flex-col w-full h-full bg-white overflow-hidden overflow-y-auto no-scrollbar'>
			<Alert msg='Set up email forwarding to see new customer messages on your dashboard.' />
			<div className='w-full h-full flex'>
				<div className='flex-1 flex flex-col border-r border-light-gray-dimata-5'>
					<div className='w-full h-12 centering-flex border-b px-2  border-light-gray-dimata-5 gap-x-6'>
						<div
							className={clsx('h-full centering-flex px-4', {
								'border-b-2 border-blue-dimata-2 ': checkLinkAgents(
									'agent' || 'undefined',
									pathname,
								),
							})}
						>
							<Link href={'agent'} className='text-black-dimata text-lg font-medium'>
								Agent(3)
							</Link>
						</div>
						<div
							className={clsx('h-full centering-flex px-4', {
								'border-b-2 border-blue-dimata-2 ': checkLinkAgents(
									'team' || 'undefined',
									pathname,
								),
							})}
						>
							<Link href={'team'} className='text-black-dimata text-lg font-medium'>
								Team(3)
							</Link>
						</div>
					</div>
					<div>{children}</div>
				</div>
				<div className='w-[240px] h-full bg-white overflow-hidden'>
					<div className='w-full h-12 centering-flex p-2 border-b border-light-gray-dimata-5 gap-x-2'>
						<p>Details</p>
					</div>
				</div>
			</div>
		</div>
	);
}
