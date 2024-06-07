'use client';

import Alert from '@/app/features/dashboard/sidenav/components/alert';
import SideNavTickets from '@/app/features/dashboard/tickets/components/create/left-side-nav-create-tickets';
import { TicketListsSkeleton } from '@/app/features/dashboard/tickets/components/ticket-list-skeleton';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const handlePathname = (pathname: string) => {
		const isNotMainPage = /^\/dashboard\/tickets\/(create|details(\/\d+)?)$/;
		return isNotMainPage.test(pathname);
	};
	return (
		<div className='flex flex-col w-full min-h-screen overflow-y-auto overflow-x-hidden no-scrollbar'>
			<Alert msg='Set up email forwarding to see new customer messages on your dashboard.' />
			<div className='w-full h-full flex flex-col lg:flex-row'>
				{!handlePathname(pathname) && (
					<div className='w-full lg:w-[240px] h-fit overflow-hidden'>
						<SideNavTickets />
					</div>
				)}
				<div className='flex-1 flex flex-col h-full no-scrollbar'>
					<Suspense fallback={<TicketListsSkeleton />}>{children}</Suspense>
				</div>
			</div>
		</div>
	);
}
