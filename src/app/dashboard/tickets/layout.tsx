'use client';

import SideNavTickets from '@/app/features/dashboard/tickets/components/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='max-w-full h-full flex'>
			<div className='w-[240px] h-auto overflow-hidden'>
				<SideNavTickets />
			</div>
			<div className='flex-1'>{children}</div>
		</div>
	);
}
