'use client';

import SideNavTickets from '@/app/features/dashboard/tickets/components/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='w-screen h-full flex'>
			<div className='w-[240px] h-auto overflow-hidden'>
				<SideNavTickets />
			</div>
			{children}
		</div>
	);
}
